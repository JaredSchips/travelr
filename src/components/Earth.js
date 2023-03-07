import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/context';
import { SET_SELECTION } from '../context/actions';
import Globe from 'react-globe.gl';

function Earth() {
  const [countries, setCountries] = useState({ features: [] });
  const {selection, selectionDispatch} = useContext(GlobalContext)
  
  const setSelection = (country) => {
    selectionDispatch({
      type: SET_SELECTION,
      payload: country
    })
  }

  const earthDataURL = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson'

  useEffect(() => {
    fetch(earthDataURL)
      .then(res =>  res.json())
      .then(countries => setCountries(countries));
  }, []);

  return (
    <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
      polygonsData={countries.features.filter(country => country.properties.NAME !== 'Antarctica')}
      polygonAltitude={0.01}
      polygonCapColor={country => country.properties.NAME === selection?.properties.NAME ? '#C98BB9' : '#FAE3E3'}
      polygonStrokeColor={() => '#111'}
      polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
      onPolygonClick={setSelection}
    />
  );
}

export default Earth;
