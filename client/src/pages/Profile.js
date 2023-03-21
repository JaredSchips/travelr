import React from "react";
import { useState } from "react";
import profileImage from "./profile-image.jpg";
import {
  FaHeart,
  FaChartLine,
  FaEnvelopeOpenText,
  FaGlobeEurope,
} from "react-icons/fa";
import BucketList from "../components/BucketList";
import FavoriteCountries from "../components/FavList";
import Chat from "../components/Chat";

const ProfilePage = ({ setIconsBlack }) => {
  setIconsBlack(true);
  const [currentPage, setCurrentPage] = useState(1);

  const renderPage = () => {
    switch (currentPage) {
      case 2:
        return <BucketList />;
      case 3:
        return <FavoriteCountries />;
      case 4:
        return <Chat />;
    }
  };

  const buttonStyling = `flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-blue-600 via-indigo-700 to-indigo-900 
  text-gray-100 rounded-full ring-5 ring-purple-200 px-8 py-2 
  hover:bg-white  hover:text-white hover:ring-slate-300 mx-8 
  rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600`;

  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src={profileImage}
          alt="Profile"
          className="w-40 h-40 rounded-full"
        />
        <h1 className="mt-4 text-2xl font-bold">John Doe</h1>
        <p className="mt-2 text-gray-500">Traveler</p>
        <div className="mt-4  flex justify-between">
          <div className="">
            <a href="/favorite" onClick={() => setCurrentPage(3)}>
              <button type="submit" className={buttonStyling}>
                <FaHeart size="2.5rem" />
              </button>
            </a>
          </div>
          <a href="/stats" onClick={() => setCurrentPage(3)}>
            <button type="submit" className={buttonStyling}>
              <FaChartLine size="2.5rem" />
            </button>
          </a>
          <div className=""></div>
          <a href="/bucket" onClick={() => setCurrentPage(2)}>
            {" "}
            <button type="submit" className={buttonStyling}>
              <FaGlobeEurope size="2.5rem" />
            </button>
          </a>
          <a href="/chat" onClick={() => setCurrentPage(4)}>
            {" "}
            <button type="submit" className={buttonStyling}>
              <FaEnvelopeOpenText size="2.5rem" />
            </button>
          </a>
          <div className=""></div>
        </div>
      </div>
      {renderPage}
    </>
  );
};

export default ProfilePage;
