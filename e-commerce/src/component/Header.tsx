import React from "react";

// type Props = {}

const Header: React.FC = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-upper">
          <div className="nav-upper-left">
            <p>
              EN{" "}
              <span style={{ marginInlineStart: "5px" }}>
                <img src="/icons/arrow_down.png" alt="arrow_down" />
              </span>
            </p>
            <p>
              USD{" "}
              <span style={{ marginInlineStart: "5px" }}>
                <img src="/icons/arrow_down.png" alt="arrow_down" />
              </span>
            </p>
          </div>
          <div className="nav-upper-right"></div>
        </div>
        <div className="nav-down"></div>
      </div>
    </>
  );
};

export default Header;
