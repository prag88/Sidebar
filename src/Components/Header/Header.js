//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaPlus} from "react-icons/fa";
import { FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { BiImages } from "react-icons/bi";
import {MdOutlineWidgets, MdNoteAdd, MdOutlineCancel} from "react-icons/md";
import {AiOutlineMenu} from "react-icons/ai"


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import "./Navbar.css";


const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  

  return (
    <>
    <div className="Navbar">
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? (<AiOutlineMenu/>) : (<MdOutlineCancel/>) }</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (<FiArrowRightCircle/>) : (<FiArrowLeftCircle/>)}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <div className="sidehover1"><MenuItem active={true} icon={<FaPlus size={30}/>}>Add</MenuItem></div>
              <div className="sidehover2"><MenuItem icon={<MdOutlineWidgets size={30} />}>Components</MenuItem></div>
              <div className="sidehover3"><MenuItem icon={<BiImages size={30}/>}>Image/Video</MenuItem></div>
              <div className="sidehover4"><MenuItem icon={<MdNoteAdd size={30}/>}>Add Pages</MenuItem></div>
              
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
            <div className="sidehover5"><MenuItem icon={<FiLogOut size={30}/>}>Logout</MenuItem></div>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
      </div>
    </>
  );
};

export default Header;