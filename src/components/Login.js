import React, { useState } from "react";
import axios from "axios";
function Login(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errormsg , setErrorMsg] = useState("")

    const onLoginHandler = () => {
        axios.post('http://localhost:8080/login', {email : email , password : password},
     {headers: {"Accept" : "application/json"}})
    .then(res => {
        setErrorMsg(res.data.object)
        props.changeTab("UserList")
    }
    
    // this.setState({ user: response.data.id }
        ).catch(error => {
            console.log(error.response.data.object)
            setErrorMsg(error.response.data.object)
        });
        
        console.log("test");
    }
    const onEmailChange = (e) => {
        setEmail(e.target.value)
        
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
        
    }
    

    return (
        <div>
            <div>
                {errormsg}
            </div>
            <label> Email </label>
            <input type="text" name="email" value={email} onChange={onEmailChange}  ></input>
            <label> Password</label>
            <input type="password" name="password" value={password} onChange={onPasswordChange}></input>
            <button onClick={onLoginHandler}>Login </button>
        </div>
    )
}

export default Login;