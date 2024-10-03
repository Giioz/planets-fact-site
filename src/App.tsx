import './App.css'
import { PlanetsAbout } from './components/PlanetsAbout'
import { PlanetsHeader } from './components/shared/PlanetsHeader'
import { useState } from 'react';
import data from './components/config/data.json';


function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(data[0]);
  const handlePlanetClick = (planet:any) => {
    setSelectedPlanet(planet);
    console.log(selectedPlanet)

  };
  return (
    <>
      <PlanetsHeader planets={data} onPlanetClick={handlePlanetClick} />
      <PlanetsAbout planet={selectedPlanet}/>
    </>
  )
}

export default App
