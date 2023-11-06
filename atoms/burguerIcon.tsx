import React from "react";

type Props = {
  active?: boolean;
};

export default function BurguerIcon({}: Props) {
  return (
    <div className="navbar">
      <div className="container nav-container">
        <input className="checkbox" type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
      </div>
    </div>
  );
}
