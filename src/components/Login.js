import React, {useState} from 'react'
import "./login.css"
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const history = useHistory();
    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/dashboard")
    }
  return (
    <div className="login">
      <div>
        <label>Email</label>
        <input value={email} type="email" required="true" onChange={(e) =>{setEmail(e.target.value)}} />
        </div>  
        <div>
        <label>Password</label>
        <input value={password} type="password" required="true" onChange={(e) =>{setPassword(e.target.value)}} />
        </div>  
        <button onClick={submitHandler}>Login</button>
    </div>
  )
}

export default Login