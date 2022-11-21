import React from "react";
// import classes from "./navbar.module.css";
import "./navbar.css";

export const Navbar = () => {
  return (
    <section className="nav flex">
      <div className="">
        <img
          className="logo_img"
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt="Udemy"
        />
      </div>
      <div className="flex middle_nav">
        <div className=" ">
          <span>Categories</span>
        </div>
        <div className="flex justify-centre items-center search_input_div">
          <div className="translate-y-0.5">
            <lord-icon
              src="https://cdn.lordicon.com/rlizirgt.json"
              trigger="hover"
              colors="primary:gray"
              state="hover"
              style={{
                width: 25 + "px",
                height: 25 + "px",
              }}
            ></lord-icon>
          </div>
          <div className="search_input">
            <input
              className="search_input"
              type="search"
              placeholder="Search for anything"
            />
          </div>
        </div>
        <div className="">
          <span>Udemy Business</span>
        </div>
        <div>
          <span>Teach on Udemy</span>
        </div>
      </div>
      <div className="flex">
        <div>
          <lord-icon
            src="https://cdn.lordicon.com/hyhnpiza.json"
            trigger="hover"
            style={{ width: 2 + "rem", height: 2 + "rem" }}
          ></lord-icon>
        </div>
        <div className="button">Log in</div>
        <div className="button">Sign up</div>
        <div>
          <lord-icon
            src="https://cdn.lordicon.com/hwuyodym.json"
            trigger="hover"
            style={{ width: 2 + "rem", height: 2 + "rem" }}
          ></lord-icon>
        </div>
      </div>
    </section>
  );
};
