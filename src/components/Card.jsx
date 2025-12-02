import React from "react";
import Detail from "./Detail"
import Avatar from "./Avatar";

function Card(props){
    return (<div className="card">
        
        <div className="top">
            {/* <p>{props.id}</p> */}
          <h2 className="name">{props.name}</h2>

          <Avatar
          img={props.img}
       />
            <img className="imgCircle" src={props.imgUrl}    alt="local-img" />
        </div>
        <div className="bottom">
            <Detail 
            detailInfo={props.email}
            /> 
             <Detail
            detailInfo={props.phone}
            /> 
            </div>      
    </div>);
}
export default Card;
