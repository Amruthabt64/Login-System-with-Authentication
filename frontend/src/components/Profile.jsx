import { useNavigate } from "react-router-dom"
import "../styles/Profile.css"

const Profile=()=>{
  const navigate=useNavigate()
  const backtologin=()=>{
    navigate("/login")
  }
  return(
    <div className="profile-container" >
    <h2>Welcome to profile🎉</h2>
    <button onClick={backtologin} className="profile-button">Back</button> 

    </div>
  )
}
export default Profile