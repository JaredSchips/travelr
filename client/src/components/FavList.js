import React, { useState, useEffect } from "react";
import axios from "axios";
import image from "./globe.png";
import "./FavoriteCountries.css";

function FavoriteCountries({ citiesList }) {
  const [favoriteCountries, setFavoriteCountries] = useState(citiesList);
  const [newCountry, setNewCountry] = useState("");
  const [countryImages, setCountryImages] = useState([]);

  const UNSPLASH_API_KEY = "80B5-eXWcv50qvBAsd-jGPth_omIc7BfqsgLLClSta8";

  useEffect(() => {
    async function fetchImages() {
      const images = await Promise.all(
        favoriteCountries.map(async (country) => {
          const response = await axios.get(
            `https://api.unsplash.com/search/photos?query=${country}&client_id=${UNSPLASH_API_KEY}&per_page=1`
          );
          return response.data.results[0]?.urls.small || null;
        })
      );
      setCountryImages(images);
    }
    fetchImages();
  }, [favoriteCountries]);

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
            Travelr | My Favorite Cities ❤️
          </h2>
          <div className="grid grid-cols-3 gap-4 bg-purple-500 p-4 rounded-lg mb-4">
            {favoriteCountries.map((country, index) => (
              <div
                key={index}
                className="favorite-block bg-white text-white p-2 rounded-lg relative"
              >
                {countryImages[index] && (
                  <img
                    src={countryImages[index]}
                    alt={country}
                    className="w-full h-full object-cover absolute inset-0 z-0 rounded-lg"
                  />
                )}
                <div className="z-10 relative country-label">
                  {"❤️"}
                  {country}
                </div>
              </div>
            ))}
            {!favoriteCountries.length && <div className="col-span-full text-white font-semibold">No cities favorited!</div>}
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
