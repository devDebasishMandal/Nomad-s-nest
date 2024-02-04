import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'


const Navbar =()=>{

    return(
        <div className="Navbar">
         <h1 className="logo">NomadNest</h1>
         <div className="menue">
            <ul>
                <li><a href="#"><i className="fa-solid fa-house fa-xl"></i></a></li>
                <li><a href="#"><i className="fa-solid fa-bookmark fa-xl"></i></a></li>
                <li><a href="#"><i className="fa-solid fa-bell fa-xl"></i></a></li>
                <li><a href="#"><i className="fa-solid fa-user fa-xl"></i></a></li>
            </ul>
         </div>
        </div>
    )
}

export default Navbar;