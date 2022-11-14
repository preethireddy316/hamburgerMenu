/* eslint-disable react/no-unknown-property */
// Write your code here
/* eslint-disable prettier/prettier */

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'
import { GiHamburgerMenu } from "react-icons/gi"

import { IoMdClose } from "react-icons/io"
import { AiFillHome } from "react-icons/ai"

import { BsInfoCircleFill } from "react-icons/bs"


import {Link} from "react-router-dom"


const Header=()=>(
    <nav>
    <Link to="/">        
    <img src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png" alt="website logo"/>
</Link>
        <div className="popup-container">
   <Popup
     modal
     trigger={
         // eslint-disable-next-line jsx-a11y/control-has-associated-label
         <button testid="hamburgerIconButton" type="button"><GiHamburgerMenu/></button>
     }
     className="popup-content"
   >
   {close =>(     <ul>
       <li><button type="button" testid="closeButton" onClick={()=>close()}>
    <IoMdClose/>
    </button></li>
    <li>
        <Link to="/">
    <button type="button">
    <AiFillHome/>
    Home
    </button>
    </Link> 
    </li>
    <li>
        <Link to="/about">
    <button type="button">
    <BsInfoCircleFill/>
    About
    </button>
    </Link>
    </li>
   </ul>
     
)}
   </Popup>
 </div>        
    </nav>
)

export default Header