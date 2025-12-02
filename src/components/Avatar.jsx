import React from "react";

import img from '../image/pic (1).jpg'

function Avatar(props){
  return <img className="imgCircle" src={props.img}
  alt="avartar-img"/>
}
export default Avatar;
export {img};