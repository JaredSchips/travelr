import React, { useState } from 'react';
import image from "./globe.png";

function FavoriteCountries() {
  const [favoriteCountries, setFavoriteCountries] = useState(['Japan', 'Australia', 'Costa Rica', 'Finland', 'Hungary', 'Jordan', 'Maldives', 'Mexico']);
  const [newCountry, setNewCountry] = useState('');

  const handleAddCountry = () => {
    if (newCountry.trim() !== '') {
      setFavoriteCountries([...favoriteCountries, newCountry]);
      setNewCountry('');
    }
  }

  const handleInputChange = (event) => {
    setNewCountry(event.target.value);
  }

  return (
   <div>
     <div className="flex justify-center">
        <img alt="" className="h-20 w-20" src={image} />
      </div>
    <div className="bg-white-500 mt-2 flex justify-center items-center bg-globe bg-no-repeat bg-cover">
      <div className="max-w-md w-full rounded-lg bg-white shadow-lg p-3">
        <h2 className="text-2xl font-bold mb-4">My Favorite Countries</h2>
        <ul className="bg-purple-500 text-white p-4 rounded-lg mb-4">
          {favoriteCountries.map((country, index) => (
          <li key={index}>
{"🌏 "}{country}
{index !== favoriteCountries.length - 1 && " | "}
</li>
          ))}
        </ul> 
      
        <div className="flex">
          <input
            type="text"
            placeholder="Enter the name of the new country..."
            value={newCountry}
            onChange={handleInputChange}
            className="border border-gray-400 p-2 rounded-lg mr-2 flex-grow"
          />
          <button onClick={handleAddCountry} className="bg-purple-500 text-white p-2 rounded-lg">
            Add
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default FavoriteCountries;

