from flask import Blueprint,request,jsonify
from config import db
from model import User
from werkzeug.security import generate_password_hash,check_password_hash
from flask_jwt_extended import create_access_token,jwt_required,get_jwt_identity


app_bp=Blueprint("app",__name__)

@app_bp.route("/register",methods=["POST"])
def add_user():
    data=request.get_json()
    username=data["username"]
    password=data["password"]

    if not username or not password:
        return jsonify({"error":"username and password are required"}),400
    
    if User.query.filter_by(username=username).first():
        return jsonify({"message":"user already exist"}),400
    
    hashed_password=generate_password_hash(password)
    new_user=User(username=username,password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message":"account created successfully"}),201

@app_bp.route("/login",methods=["POST"])
def login():
    data=request.get_json()
    username=data["username"]
    password=data["password"]
    
    if not username or not password:
        return jsonify({"error":"username and password are required"}),400
    
    user=User.query.filter_by(username=username).first()
    
    if not user or not check_password_hash(user.password,password):
        return jsonify({"error":"invalid username and password"}),401
    
    access_token=create_access_token(identity=user.id)
    return jsonify({"message":"login successfull","token":access_token}),200

@app_bp.route("/profile",methods=["GET"])
@jwt_required()
def profile():
    current_user_id=get_jwt_identity
    user=User.query.get(current_user_id)

    return jsonify({
        "id":user.id,
        "username":user.username
    }),200