import React from "react";
import image from "./globe.png";
import "./Statistics.css";

function Statistics() {
  const countriesVisited = 15;
  const countriesLiked = 8;
  const commentsMade = 25;

  return (
    <div>
      <div className="flex justify-center">
        <img alt="" className="h-20 w-20" src={image} />
      </div>
      <div className="bg-white-500 mt-2 flex justify-center items-center bg-globe bg-no-repeat bg-cover">
        <div className="max-w-md w-full rounded-lg bg-white shadow-lg p-3">
          <h2 className="text-2xl font-bold mb-4">
            Travelr | My Travel Statistics
          </h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="statistic-item">
              <h3 className="text-purple-500 text-xl">{countriesVisited}</h3>
              <p>Countries Visited</p>
            </div>
            <div className="statistic-item">
              <h3 className="text-purple-500 text-xl">{countriesLiked}</h3>
              <p>Countries Liked</p>
            </div>
            <div className="statistic-item">
              <h3 className="text-purple-500 text-xl">{commentsMade}</h3>
              <p>Comments Made</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
