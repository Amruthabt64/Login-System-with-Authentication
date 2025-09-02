
import { useState } from "react"
import { useNavigate,Link } from "react-router-dom"
import "../styles/Login.css"

const Login=()=>{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const[message,setMessage]=useState("")
    const navigate=useNavigate()

    const handlelogin= async (e)=>{
      e.preventDefault();
      setError("");
      try{
      const response = await fetch("http://localhost:5000/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({username,password}),
      });
      if (response.ok){
        navigate("/profile")
      }
      else{
        setMessage("invalid username and password")
      }
    }
      catch(err){
        setError("server not reachable")

      }
    }
  return(
    <div className="login-container">
    <h2>Login</h2>

    <form onSubmit={handlelogin}>
      
        <input 
        className="login_input"
        type="email"
        placeholder="email" 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        required        
        />
        <br />
        <input className="login_input"
        type="password"
        placeholder="Password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        required        
        />
        <br />
        <button type="submit" className="login-button">Login</button>
        <br />
        <Link to="/register">Create Account</Link>
        {error && (<p style={{color:"red"}}>{error}</p>)}
    </form>
    </div>
  )
}
export default Login