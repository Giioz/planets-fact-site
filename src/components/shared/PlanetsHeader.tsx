import React, { useState } from "react";
import { IconBurgerMenu } from "../icons/IconBurgerMenu";


export const PlanetsHeader: React.FC = () => {
  const [burgerValue, setBurgerValue] = useState(false)
  const handleValueChange = (value:boolean) => {
    setBurgerValue(value)
  }
  const isBurgerToggled = burgerValue;
  console.log(isBurgerToggled)

  return (
    <>
      <header className="flex justify-between p-sm items-center">
          <h1 className="text-[1.5rem] text-white font-medium">THE PLANETS</h1>
          <IconBurgerMenu onValueChange={handleValueChange}/>
          
      </header>
      {isBurgerToggled && (
        <div className="sticky w-full h-[100vh]">
          <nav className="w-full h-full bg-white absolute top-[0px]">
            
          </nav>
        </div>
      )}
    </>
  )
}

