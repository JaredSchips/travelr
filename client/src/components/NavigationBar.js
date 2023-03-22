import React, { useState } from "react";
import "../components/nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Link } from "react-router-dom"

const Nav = ({ iconBlack }) => {
  const [activeNav, setActiveNav] = useState("#");

  const iconClass = iconBlack ? "iconBlack" : "";

  return (
		<nav>
			<Link
				to="/"
				onClick={() => setActiveNav('#')}
				className={`${activeNav === '#' ? 'active' : ''} ${iconClass}`}
			>
				<AiOutlineHome />
			</Link>
			<Link
				to="/signUp"
				onClick={() => setActiveNav('#log-in')}
				className={`${
					activeNav === '#log-in' ? 'active' : ''
				} ${iconClass}`}
			>
				<AiOutlineUser />
			</Link>
			<Link
				to="/profile"
				onClick={() => setActiveNav('#sign-up')}
				className={`${
					activeNav === '#sign-up' ? 'active' : ''
				} ${iconClass}`}
			>
				<HiOutlineUserGroup />
			</Link>
		</nav>
  );
};

export default Nav;
