import React, { useState } from 'react';
import image from './globe.png'

function BucketList() {
const [countries, setCountries] = useState(['Japan', 'Australia', 'Iceland', 'France', 'Germany', 'Albania', 'Chile', 'Colombia' ]);
const [newCountry, setNewCountry] = useState('');

const handleAddCountry = () => {
if (newCountry.trim() !== '') {
setCountries([...countries, newCountry]);
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
<h2 className="text-2xl font-bold mb-4">My Bucket List</h2>
<ul className="bg-purple-500 text-white p-4 rounded-lg mb-4">
{countries.map((country, index) => (
<li key={index}>
{"🌏 "}{country}
{index !== countries.length - 1 && " | "}
</li>
))}
</ul>
<div className="flex">
<input
       type="text"
       placeholder="Add a new country..."
       value={newCountry}
       onChange={handleInputChange}
       className="border border-gray-400 p-2 rounded-lg mr-2 flex-grow"
     />
<button onClick={handleAddCountry} 
        className="bg-purple-500 text-white p-2 rounded-lg">
Add</button>
</div>
</div>
</div>
</div>

);
}

export default BucketList;
