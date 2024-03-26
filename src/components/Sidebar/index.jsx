import React from 'react';
import './styles.css';
import Button from "../Button";
import {HomeIcon} from "../../assests/icon/home";
import {ExploreIcon} from "../../assests/icon/explore";
import {ProfileIcon} from "../../assests/icon/profile";
import {MessageIcon} from "../../assests/icon/message";
import NavItem from "../NavItem";
import Logo from "../../assests/image/Logo.png";

const Sidebar = () => {

    return (
        <div className="sidebar">
            <img src={Logo} alt="" width={20} height={16} style={{marginLeft: '16px'}}/>
            <div>
                <NavItem leftIcon={HomeIcon} children="Home"/>
                <NavItem leftIcon={ExploreIcon} children="Explore"/>
                <NavItem leftIcon={MessageIcon} children="Messages"/>
                <NavItem leftIcon={ProfileIcon} children="Profile"/>
            </div>
            <Button variant="default" size="medium" children={"Tweet"}/>
        </div>
    )
}

export default Sidebar;