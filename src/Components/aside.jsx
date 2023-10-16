import React from "react";
import Pic from "../WhatsApp_Image_2023-09-21_at_12.20.41-removebg-preview.png"

class Aside extends React.Component{
    render(){
        return (
            <div className="aside">
                {/* if the image file is in Public Folder */}
                <img src="./logo512.png" alt="" />
                {/* if the image file is in src Folder */}
                <img src={Pic} alt="" />
            </div>
        )
    }
}

export default Aside;