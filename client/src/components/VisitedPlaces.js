import React, { useState, useEffect } from "react";
import axios from "axios";
import image from "./globe.png";
import "./VisitedPlaces.css";

function VisitedPlaces() {
  const [places, setPlaces] = useState([
    "Tokyo, Japan",
    "Sydney, Australia",
    "Reykjavik, Iceland",
    "Paris, France",
    "Berlin, Germany",
  ]);
  const [newPlace, setNewPlace] = useState("");
  const [placeImages, setPlaceImages] = useState([]);

  const UNSPLASH_API_KEY = "80B5-eXWcv50qvBAsd-jGPth_omIc7BfqsgLLClSta8";

  useEffect(() => {
    async function fetchImages() {
      const images = await Promise.all(
        places.map(async (place) => {
          const response = await axios.get(
            `https://api.unsplash.com/search/photos?query=${place}&client_id=${UNSPLASH_API_KEY}&per_page=1`
          );
          return response.data.results[0]?.urls.small || null;
        })
      );
      setPlaceImages(images);
    }
    fetchImages();
  }, [places]);

  const handleAddPlace = () => {
    if (newPlace.trim() !== "") {
      setPlaces([...places, newPlace]);
      setNewPlace("");
    }
  };

  const handleInputChange = (event) => {
    setNewPlace(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-center">
        <img alt="" className="h-20 w-20" src={image} />
      </div>
      <div className="bg-white-500 mt-2 flex justify-center items-center bg-globe bg-no-repeat bg-cover">
        <div className="max-w-md w-full rounded-lg bg-white shadow-lg p-3">
          <h2 className="text-2xl font-bold mb-4">
            Travelr | Places Visited 📍
          </h2>
          <div className="grid grid-cols-2 gap-4 bg-purple-500 p-4 rounded-lg mb-4">
            {places.map((place, index) => (
              <div
                key={index}
                className="place-block bg-white text-white p-2 rounded-lg relative"
              >
                {placeImages[index] && (
                  <img
                    src={placeImages[index]}
                    alt={place}
                    className="w-full h-full object-cover absolute inset-0 z-0 rounded-lg"
                  />
                )}
                <div className="z-10 relative place-label">
                  {"📍 "}
                  {place}
                </div>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Add a new place..."
              value={newPlace}
              onChange={handleInputChange}
              className="border border-gray-400 p-2 rounded-lg mr-2 flex-grow"
            />
            <button
              onClick={handleAddPlace}
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

export default VisitedPlaces;
