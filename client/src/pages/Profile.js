import React from "react";
import profileImage from "./profile-image.jpg";
import Header from "../components/Header";
import { FaHeart, FaChartLine , FaEnvelopeOpenText, FaGlobeEurope } from "react-icons/fa";


const ProfilePage = () => {
  const buttonStyling = `flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-blue-600 via-indigo-700 to-indigo-900 
  text-gray-100 rounded-full ring-5 ring-blue-200 px-8 py-2 
  hover:bg-white  hover:text-white hover:ring-slate-300 mx-8`;
  return (
    <>
  
    <div className="flex flex-col items-center">
      <img src={profileImage} alt="Profile" className="w-40 h-40 rounded-full" />
      <h1 className="mt-4 text-2xl font-bold">John Doe</h1>
      <p className="mt-2 text-gray-500">Traveler</p>
      <div className="mt-4  flex justify-between">
      <div className=''>
        <button
          type='submit'
          className={buttonStyling}> 
          <FaHeart size='2.5rem' />
        </button>
      </div>
      <div className=''>
        <button
          type='submit'
          className={buttonStyling}>  
          <FaChartLine size='2.5rem' />
        </button>
      </div>
      <div className=''>
        <button
          type='submit'
          className={buttonStyling}>
          <FaEnvelopeOpenText size='2.5rem' />
        </button>
      </div>
      <div className=''>
        <button
          type='submit'
          className={buttonStyling}>
         
          <FaGlobeEurope size='2.5rem' />
        </button>
      </div>
      </div>
    </div>
    </>
  );
};

export default ProfilePage;
