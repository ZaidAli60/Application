import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiLogOut,
} from "react-icons/fi";
import Admin from "../../Assets/admin.jpg";
import { MdDashboard, MdAddShoppingCart } from "react-icons/md";
import { IoBagAddSharp } from "react-icons/io5";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import Logo2 from "../../Assets/Logo2.png";

function Sidbar({ rtl, toggled, handleToggleSidebar }) {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const headerStyle = {
    paddingTop: "1rem",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    fontWeight: "bold",
    letterSpacing: "1px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    backgroundColor: "#252f3e",
  }
  

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <ProSidebar
      collapsed={menuCollapse}
      rtl={rtl}
      toggled={toggled}
      handleToggleSidebar={handleToggleSidebar}
      breakPoint="md"
    
    >
      <SidebarHeader style={headerStyle}>
        <div className="logotext ">
          {/* small and big change using menucollapse state */}
          {/* <p>{menuCollapse ? "Logo" : "Big Logo"}</p> */}
          {menuCollapse ? (
            <img className="img-fluid" src={Logo2} alt="Logo2" />
          ) : (
            <img
              className="img-fluid"
              style={{ width: "10rem", height: "auto" }}
              src={Logo}
              alt="Biglogo"
            />
          )}
        </div>
        <div className="closemenu" onClick={menuIconClick}>
          {/* changing menu collapse icon on click */}
          {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
        </div>

        <div className="my-4 d-flex align-items-center flex-wrap">
          <img
            src={Admin}
            className="img-fluid rounded-circle "
            style={{
              width: "3.5rem",
            }}
            alt="admin"
          />
          <div className="mx-3 text-white fs-5 ">Zaid Ali</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<MdDashboard />}>
            <Link to="/dashboard">Dashboard</Link>
          </MenuItem>
          <MenuItem icon={<MdAddShoppingCart />}>
            <Link to="/addproduct">Add Products</Link>
          </MenuItem>
          <MenuItem icon={<IoBagAddSharp />}>
            <Link to="/newproduct">New Product</Link>
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <Menu
          iconShape="circle"
          style={{
            backgroundColor: "#252f3e",
          }}
        >
          <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
        </Menu>
      </SidebarFooter>
    </ProSidebar>
  );
}
export default Sidbar;
