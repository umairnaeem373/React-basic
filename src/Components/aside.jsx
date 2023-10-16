import React from "react";
import Pic from "../WhatsApp_Image_2023-09-21_at_12.20.41-removebg-preview.png"

class Aside extends React.Component{
    render(){
        return (
            <div className="aside">
                <img src="./logo512.png" alt="" />
                {/* <img src={Pic} alt="" /> */}
            </div>
        )
    }
}

export default Aside;