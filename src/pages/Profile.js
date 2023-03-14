import React from "react";
import profileImage from "../components/prof.jpg";

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={profileImage} alt="Profile" className="w-40 h-40 rounded-full" />
      <h1 className="mt-4 text-2xl font-bold">John Doe</h1>
      <p className="mt-2 text-gray-500">Cool guy</p>
      <div className="mt-4 w-64 flex justify-between">
        <div>
          <p className="font-bold">Followers</p>
          <p>10K</p>
        </div>
        <div>
          <p className="font-bold">Following</p>
          <p>100</p>
        </div>
        <div>
          <p className="font-bold">Posts</p>
          <p>50</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;