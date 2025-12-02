import React from "react";

function Form(props){
    return <div>
        <form action="">
            <input type="text" placeholder="User Name"/>
            <input type="password" placeholder="Password"/>
           {props.isRegestered && <input type="password" placeholder="Confirm Password" />}
            <button type="submit">{props.isRegestered?"Login":"Register"}</button>
        </form>
    </div>
}
export default Form;