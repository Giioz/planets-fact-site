import './App.css'
import { PlanetsAbout } from './components/PlanetsAbout'
import { PlanetsHeader } from './components/shared/PlanetsHeader'
import { useEffect, useState } from 'react';
import data from './components/config/data.json';
import { useWindowSize } from './components/hooks/ResizeHook';


function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(data[0]);
  const [isMobile, setIsMobile] = useState(false)
  const [width,height]:any = useWindowSize()
  useEffect(() => {
    if(width <= 768) {
      setIsMobile(true)
    }else if(width >= 768){
      setIsMobile(false)
    }
  })
  const handlePlanetClick = (planet:any) => {
    setSelectedPlanet(planet);
    
  };
  return (
    <>
      <PlanetsHeader planets={data} onPlanetClick={handlePlanetClick} isMobile={isMobile}/>
      <PlanetsAbout planet={selectedPlanet} isMobile={isMobile}/>
    </>
  )
}

export default App
