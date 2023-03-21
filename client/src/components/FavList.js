import React, { useState } from "react";
import image from "./globe.png";
import "./FavoriteCountries.css";

function FavoriteCountries() {
  const [favoriteCountries, setFavoriteCountries] = useState([
    "Japan",
    "Australia",
    "Costa Rica",
    "Finland",
    "Hungary",
    "Jordan",
    "Maldives",
    "Mexico",
  ]);
  const [newCountry, setNewCountry] = useState("");

  const handleAddCountry = () => {
    if (newCountry.trim() !== "") {
      setFavoriteCountries([...favoriteCountries, newCountry]);
      setNewCountry("");
    }
  };

  const handleInputChange = (event) => {
    setNewCountry(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-center">
        <img alt="" className="h-20 w-20" src={image} />
      </div>
      <div className="bg-white-500 mt-2 flex justify-center items-center bg-globe bg-no-repeat bg-cover">
        <div className="max-w-md w-full rounded-lg bg-white shadow-lg p-3">
          <h2 className="text-2xl font-bold mb-4">
            Travelr | My Favorite Countries
          </h2>
          <div className="grid grid-cols-2 gap-4 bg-purple-500 p-4 rounded-lg mb-4">
            {favoriteCountries.map((country, index) => (
              <div
                key={index}
                className="favorite-block bg-white text-purple-500 p-2 rounded-lg"
              >
                {"🌏 "}
                {country}
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter the name of the new country..."
              value={newCountry}
              onChange={handleInputChange}
              className="border border-gray-400 p-2 rounded-lg mr-2 flex-grow"
            />
            <button
              onClick={handleAddCountry}
              className="bg-purple-500 text-white p-2 rounded-lg"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCountries;
