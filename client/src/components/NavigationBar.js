import React from "react";
import "../components/nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#log-in"
        onClick={() => setActiveNav("#log-in")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#sign-up"
        onClick={() => setActiveNav("sign-up")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <HiOutlineUserGroup />
      </a>
      <a
        href="#chat"
        onClick={() => setActiveNav("#chat")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
