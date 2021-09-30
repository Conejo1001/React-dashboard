import React, {useRef} from "react";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ForumIcon from '@material-ui/icons/Forum';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LanguageIcon from '@material-ui/icons/Language';
import MessageIcon from '@material-ui/icons/Message';
import SettingsIcon from '@material-ui/icons/Settings';
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { Button } from '../../components/button/Button';
import "./Avatar.css"

function Avatar() {
    const dropdownRef = useRef(null);
    const[isActive,setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
  
    return(    
    <div className="menu-container">
      <div className="topbarIconContainer">
        <div className="topbarIcon">
          <NotificationsNoneIcon />
        </div>
        <div className="topbarIcon">
          <LanguageIcon />
        </div>
      </div>
      <button onClick={onClick} className="menu-trigger">
        <span>User</span>
        <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User Avatar" />
      </button>      
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
         <li>
           <div className="avatarImg">
             <img className="avatar" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User Avatar"/>
           <div className="avatarUser">
            User          
           </div>
           </div>
         </li>
         <li>
            <a href="/messages"><AccountBoxIcon className="menuIcon"/>Profile</a>
            <a href="/settings"><SettingsIcon className="menuIcon"/>Settings</a>
          </li>
          <li>
            <a href="/messages"><MessageIcon className="menuIcon"/>Messages</a>
            <a href="/chat"><ForumIcon className="menuIcon"/>Chat</a>
            <div className="buttonComp">
              <Button buttonSize='btn--medium' buttonColor='white'>
                Sign Out
              </Button>
            </div>
          </li>
        </ul>
      </nav> 
    </div>
   );
}

export default Avatar;
