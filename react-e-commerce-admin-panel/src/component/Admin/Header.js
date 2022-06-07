import React from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import Admin from "../../Assets/admin.jpg";
function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  ">
        <div className="container">
          <button
            className="navbar-toggler d-block d-md-none  bg-dark text-white btn "
            onClick={() => props.handleToggleSidebar(true)}
          >
            <FaBars />
          </button>

          <div className="d-flex py-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn text-white fw-bold"
              style={{
                backgroundColor: "#f57224",
              }}
            >
              Search
            </button>
          </div>
          <div className="d-flex align-items-center py-1 ">
            <div className="fs-4">
              <AiOutlineMessage />

              <IoMdNotificationsOutline className="mx-2" />
            </div>
            <img
              src={Admin}
              className="rounded-circle img-fluid"
              style={{
                width: "3rem",
              }}
              alt="Avatar"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
