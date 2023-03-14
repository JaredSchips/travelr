import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/context';
import { SET_SELECTION } from '../context/actions';
import Globe from 'react-globe.gl';

function Earth() {
  const [countries, setCountries] = useState({ features: [] });
  const [cities, setCities] = useState([]);
  const {selection, selectionDispatch} = useContext(GlobalContext)

  useEffect(() => {
    fetch('./geojson/ne_110m_admin_0_countries.geojson')
      .then(res =>  res.json())
      .then(countries => setCountries(countries));
    
    fetch('./geojson/ne_110m_populated_places_simple.geojson')
      .then(res => res.json())
      .then(({ features }) => setCities(features));
  }, []);

  return (
    <div>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

        polygonsData={countries.features.filter(country => country.properties.NAME !== 'Antarctica')}
        polygonAltitude={0.01}
        polygonCapColor={country => country.properties.NAME === selection?.properties.adm0name ? '#C98BB9' : '#FAE3E3'}
        polygonStrokeColor={() => '#111'}
        polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}

        labelsData={cities}
        labelLat={city => city.properties.latitude}
        labelLng={city => city.properties.longitude}
        labelText={city => city.properties.nameascii}
        labelSize={city => Math.sqrt(city.properties.pop_max) * 4e-4}
        labelDotRadius={city => Math.sqrt(city.properties.pop_max) * 4e-4}
        labelColor={city => city.properties.name === selection?.properties.name ? '#3dd' : 'rgba(255, 165, 0, 0.75)' }
        labelResolution={2}
        labelAltitude={0.02}
        onLabelClick={city => selectionDispatch({ type: SET_SELECTION, payload: city })}
      />
    </div>
  );
}

export default Earth;
