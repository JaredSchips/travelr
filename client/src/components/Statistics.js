import React from "react";
import image from "./globe.png";
import "./Statistics.css";

function Statistics({ user }) {
  console.log(user)
  const citiesVisited = user.visitedCities.length;
  const countriesVisited = new Set(user.visitedCities.map(city => city.country)).size;
  const citiesLiked = user.favoritesList.length;
  const totalCountries = 195;
  const visitedPercentage = (countriesVisited / totalCountries) * 100;

  return (
    <div>
      <div className="flex justify-center">
        <img alt="" className="h-20 w-20 mb-4" src={image} />
      </div>
      <div className="bg-white-500 mt-2 flex justify-center items-center bg-globe bg-no-repeat bg-cover">
        <div className="max-w-md w-full rounded-lg bg-white shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Travelr | My Travel Statistics
          </h2>
          <div className="grid grid-cols-3 gap-4 text-center mb-6">
            <div className="statistic-item">
              <h3 className="text-purple-500 text-3xl font-bold">
                {countriesVisited}
              </h3>
              <p className="text-gray-700 font-semibold">Countries Visited</p>
            </div>
          <div className="statistic-item">
              <h3 className="text-purple-500 text-3xl font-bold">
                {citiesVisited}
              </h3>
              <p className="text-gray-700 font-semibold">Cities Visited</p>
            </div>
            <div className="statistic-item">
              <h3 className="text-purple-500 text-3xl font-bold">
                {citiesLiked}
              </h3>
              <p className="text-gray-700 font-semibold">Cities <br/> Liked</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              Total Countries Visited: {visitedPercentage.toFixed(1)}%
            </h3>
            <div className="progress-bar bg-gray-300 rounded-lg h-4">
              <div
                className="progress-bar-inner bg-purple-500 rounded-lg h-full"
                style={{ width: `${visitedPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
