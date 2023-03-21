import React from "react";
import "../components/nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
const Nav = ({ iconBlack }) => {
  console.log(iconBlack);
  const [activeNav, setActiveNav] = useState("#");
  function classNames(activeNav, iconBlack) {
    let aNav;
    let icon;
    switch (activeNav) {
      case "#":
        aNav = "active";
        break;
      case "#log-in":
        aNav = "active";
        break;
      case "#sign-up":
        aNav = "active";
        break;
      case "#chat":
        aNav = "active";
        break;
      default:
        aNav = "";
        break;
    }
    if (iconBlack) {
      icon = "iconBlack";
    } else {
      icon = "";
    }
    return `${aNav} ${icon}`;
  }
  return (
    <nav>
      <a
        href="/"
        onClick={() => setActiveNav("#")}
        className={classNames(activeNav, iconBlack)}
      >
        <AiOutlineHome />
      </a>
      <a
        href="/signUp"
        onClick={() => setActiveNav("#log-in")}
        className={classNames(activeNav, iconBlack)}
      >
        <AiOutlineUser />
      </a>
      <a
        href="/profile"
        onClick={() => setActiveNav("sign-up")}
        className={classNames(activeNav, iconBlack)}
      >
        <HiOutlineUserGroup />
      </a>
      <a
        href="/chat"
        onClick={() => setActiveNav("#chat")}
        className={classNames(activeNav, iconBlack)}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
