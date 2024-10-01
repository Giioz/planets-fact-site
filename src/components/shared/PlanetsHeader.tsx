import React, { useState } from "react";
import { IconBurgerMenu } from "../icons/IconBurgerMenu";

export interface Planet {
  name: string;
  overview: { 
    content: string; 
    source: string; 
  };
  structure: { 
    content: string; 
    source: string; 
  };
  geology: { 
    content: string; 
    source: string; 
  };
  facts: {
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
  };
  images: { 
    planet: string; 
    internal: string; 
    geology: string; 
  };
}

export interface NavBarProps {
  planets: Planet[];
  onPlanetClick: (planet: Planet) => void;
}

export const PlanetsHeader: React.FC<NavBarProps> = ({planets, onPlanetClick}) => {
  const [burgerValue, setBurgerValue] = useState(false)
  const handleValueChange = (value:boolean) => {
    setBurgerValue(value)
  }
  const isBurgerToggled = burgerValue;
  
  const liColors:any = {
    Mercury: "bg-mercury",
    Venus: "bg-venus",
    Earth: "bg-earth",
    Mars: "bg-mars",
    Jupiter: "bg-jupiter",
    Saturn: "bg-saturn",
    Uranus: "bg-uranus",
    Neptune: "bg-neptune"
};
  return (
    <>
      <header className="flex justify-between p-sm items-center">
          <h1 className="text-[1.5rem] text-white font-medium">THE PLANETS</h1>
          <IconBurgerMenu onValueChange={handleValueChange}/>
          
      </header>
      {isBurgerToggled && (
        <div className="sticky w-full h-[100vh] border-t-[1px] border-opacity-[20%] border-white">
          <nav className="w-full h-full bg-[#070724] absolute top-[0px] p-sm">
            {planets.map((planet:any)=>(
              <li 
                  key={planet.name} 
                  onClick={() => onPlanetClick(planet)}
                  className="list-none border-b-[1px] border-opacity-[10%] border-white flex justify-between py-[20px] cursor-pointer"
              > 
                <div className="flex text-white gap-[25px]">
                    <span className={`rounded-full w-[20px] h-[20px] ${liColors[planet.name]}`}></span>
                    {planet.name.toUpperCase()} 
                </div>
                <div className="text-opacity-[40%] text-white"> &gt;</div>
              </li>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}

