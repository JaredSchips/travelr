import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/context';
import { SET_SELECTION } from '../context/actions';
import Globe from 'react-globe.gl';

function Earth() {
  const [countries, setCountries] = useState({ features: [] });
  const [cities, setCities] = useState([]);
  const {selection, selectionDispatch} = useContext(GlobalContext)
  
  const setSelection = (country) => {
    selectionDispatch({
      type: SET_SELECTION,
      payload: country
    })
  }

  const countryDataURL = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson'
  const cityDataURL = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_populated_places_simple.geojson';

  useEffect(() => {
    fetch(countryDataURL)
      .then(res =>  res.json())
      .then(countries => setCountries(countries));
    
    fetch(cityDataURL)
      .then(res => res.json())
      .then(({ features }) => setCities(features));
    
    console.log(cities)
  }, []);

  return (
    <div>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

        polygonsData={countries.features.filter(country => country.properties.NAME !== 'Antarctica')}
        polygonAltitude={0.01}
        polygonCapColor={country => country.properties.NAME === selection?.properties.NAME ? '#C98BB9' : '#FAE3E3'}
        polygonStrokeColor={() => '#111'}
        polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
        onPolygonClick={setSelection}

        labelsData={cities}
        labelLat={city => city.properties.latitude}
        labelLng={city => city.properties.longitude}
        labelText={city => city.properties.name}
        labelSize={city => Math.sqrt(city.properties.pop_max) * 4e-4}
        labelDotRadius={city => Math.sqrt(city.properties.pop_max) * 4e-4}
        labelColor={() => 'rgba(255, 165, 0, 0.75)'}
        labelResolution={2}
        labelAltitude={0.02}
      />
    </div>
  );
}

export default Earth;
