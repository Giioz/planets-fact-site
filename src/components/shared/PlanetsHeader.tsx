import React, { useState } from "react";
import { IconBurgerMenu } from "../icons/IconBurgerMenu";
import { PlanetsListItems } from "./PlanetsListItems";

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
  isMobile: boolean;
}

export const PlanetsHeader: React.FC<NavBarProps> = ({planets, onPlanetClick, isMobile}) => {
  const [burgerValue, setBurgerValue] = useState(false)
  const handleValueChange = (value:boolean) => {
    setBurgerValue(value)
  }
  const isBurgerToggled = burgerValue;
  return (
    <>
      <header className="flex justify-between p-sm items-center w-full md:justify-center md:flex-col">
          <h1 className="text-[1.5rem] text-white font-medium">THE PLANETS</h1>
          {isMobile && 
            <IconBurgerMenu onValueChange={handleValueChange}/>
          }
          {!isMobile && (
              <PlanetsListItems planets={planets} onPlanetClick={onPlanetClick} isMobile={isMobile}/>
          )}
      </header>
      {isBurgerToggled && (
        <div className="sticky w-full h-[100vh] border-t-[1px] border-opacity-[20%] border-white">
          <nav className="w-full h-full bg-[#070724] absolute top-[0px] p-sm">
            <PlanetsListItems planets={planets} onPlanetClick={onPlanetClick} isMobile={isMobile}/>
          </nav>
        </div>
      )}
    </>
  )
}

