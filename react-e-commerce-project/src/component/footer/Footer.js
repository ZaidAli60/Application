import React from "react";

function Footer() {
  return (
    <>
      <div style={{ backgroundColor: "#f57224" }}>
        <div className="container py-5 footerIcon ">
          <div className="text-center">
            <a className="btn text-white">
              <i class="bi bi-facebook"></i>
            </a>
            <a className="btn text-white ">
              <i class="bi bi-linkedin"></i>
            </a>
            <a className="btn text-white ">
              <i class="bi bi-google"></i>
            </a>
            <a className="btn text-white ">
              <i class="bi bi-youtube"></i>
            </a>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "	#343434",
          }}
        >
          <p className="py-3 text-white mb-0">&copy; 2022 Copyright</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
