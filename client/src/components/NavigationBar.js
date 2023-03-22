import React, { useState } from "react";
import "../components/nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = ({ iconBlack }) => {
  const [activeNav, setActiveNav] = useState("#");

  const iconClass = iconBlack ? "iconBlack" : "";

  return (
    <nav>
      <a
        href="/"
        onClick={() => setActiveNav("#")}
        className={`${activeNav === "#" ? "active" : ""} ${iconClass}`}
      >
        <AiOutlineHome />
      </a>
      <a
        href="/signUp"
        onClick={() => setActiveNav("#log-in")}
        className={`${activeNav === "#log-in" ? "active" : ""} ${iconClass}`}
      >
        <AiOutlineUser />
      </a>
      <a
        href="/profile"
        onClick={() => setActiveNav("#sign-up")}
        className={`${activeNav === "#sign-up" ? "active" : ""} ${iconClass}`}
      >
        <HiOutlineUserGroup />
      </a>
    </nav>
  );
};

export default Nav;
