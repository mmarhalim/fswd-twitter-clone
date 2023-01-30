import React, { useState, useEffect } from "react";
import { getCurrentUser } from "./utils";
import { logOutUser } from "./requests";

const Navbar = () => {

  const [currentUser, setCurrentUser] = useState("");

  const logOutHandler = function () {
    logOutUser(function (response) {
      if (response.success == true) {
        window.location.replace('/');
      };
    });
  };

  useEffect(() => {
    getCurrentUser(function (response) {
      setCurrentUser(response.username);;
    })
  }, []);

  return (
    <nav id="navbar" className="navbar navbar-light bg-light">
      <div className="container-fluid">

        <a className="navbar-brand" href="/feed">Twitter</a>
        <div className="text-end d-flex">
          <a className="nav-link" href={"/" + currentUser}>My Profile</a>
          <button className="btn btn-default" onClick={logOutHandler}>Log Out</button>
        </div>

      </div>
    </nav>
  )

}

export default Navbar;