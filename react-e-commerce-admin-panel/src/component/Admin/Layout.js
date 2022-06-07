import React, { useState } from "react";
import Header from "./Header";
import Sidbar from "./Sidebar";

function Layout(props) {
  const [toggled, setToggled] = useState(false);
  const [rtl, setRtl] = useState(false);
  const handleRtlChange = (checked) => {
    setRtl(checked);
    //setLocale(checked ? "ar" : "en");
  };
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <>
      <Sidbar
        rtl={rtl}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <main>
        <Header handleToggleSidebar={handleToggleSidebar} />
        <div className="app-content " >
          {props.children}
        </div>
      </main>
    </>
  );
}

export default Layout;
