from flask import Flask
from flask_cors import CORS
from views import app_bp
from config import db
from flask_jwt_extended import JWTManager

app=Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"]="mysql+pymysql://root:Amrutha%401@localhost:3306/practice_sql"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]=False
app.config["JWT_SECRET_KEY"]="supersecretkey"
db.init_app(app)
jwt=JWTManager(app)
app.register_blueprint(app_bp)

with app.app_context():
    db.create_all()
if __name__=="__main__":
    app.run(debug=True)