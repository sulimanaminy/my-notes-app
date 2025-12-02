import React from "react";
import input from "./input";


function Login(){
    return (
        <form className="form">
  <input
   type='text'
   placeholder='User Name'
   />
    <input
   type='password'
   placeholder='Password'
   />
            <button type="submit" >Login</button>
        </form>

    );
}
export default Login;