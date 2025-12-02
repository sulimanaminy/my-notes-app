import React from "react";

function Footer(){
    const currentYear=new Date().getFullYear();
   
    return <footer><p>
        Copy right c {currentYear}
    </p>
    </footer>
}
export default Footer;