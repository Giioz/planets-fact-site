import React, { useState } from "react";
import { IconBurgerMenu } from "../icons/IconBurgerMenu";

export interface Planet {
  name: string;
  overview: { content: string; source: string };
  structure: { content: string; source: string };
  geology: { content: string; source: string };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: { planet: string; internal: string; geology: string };
}

export interface NavBarProps {
  planets: Planet[];
  onPlanetClick: (planet: Planet) => void;
}

export const PlanetsHeader: React.FC<NavBarProps> = ({planets, onPlanetClick}:any) => {
  const [burgerValue, setBurgerValue] = useState(false)
  const handleValueChange = (value:boolean) => {
    setBurgerValue(value)
  }
  const isBurgerToggled = burgerValue;

  return (
    <>
      <header className="flex justify-between p-sm items-center">
          <h1 className="text-[1.5rem] text-white font-medium">THE PLANETS</h1>
          <IconBurgerMenu onValueChange={handleValueChange}/>
          
      </header>
      {isBurgerToggled && (
        <div className="sticky w-full h-[100vh]">
          <nav className="w-full h-full bg-white absolute top-[0px]">
            {planets.map((planet:any)=>(
              <li key={planet.name} onClick={() => onPlanetClick(planet)}>{planet.name}</li>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}

