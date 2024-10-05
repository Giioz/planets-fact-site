import { useState } from "react";
import { PlanetsAboutContent } from "./shared/PlanetsAboutContent";
import { PlanetsFactCard } from "./shared/PlanetsFactCard"
import { PlanetsInfoItems } from "./shared/PlanetsInfoItems";

export const PlanetsAbout = ({planet, isMobile}:any) => {

  const [selectedData, setSelectedData] = useState(planet["overview"]);
  const [activeIndex, setActiveIndex] = useState(Number);

  
  let facts = planet.facts

  const labels:any = {
    rotation: "Rotation Time",
    revolution: "Revolution Time",
    radius: "Radius",
    temperature: "Temperature",
  };

  const handleClick = ( key : any, index: number) => {
    if(selectedData != planet[key]){
      console.log(planet[key]);
      setSelectedData(planet[key])
    }
    setActiveIndex(index)
  }
 

  return (
    <section>
      {isMobile && 
      <div className="border-b-[1px] border-t-[1px] border-[#979797] border-opacity-[20%]">
        <ul className="w-auto min-h-[50px] pt-[20px] text-white flex px-[24px]  max-gap-[44px] text-[12px] font-bold tracking-[2.6px] leading-[25px] justify-between items-center">
          <PlanetsInfoItems planetName={planet.name} handleClik={handleClick} activeIndex={activeIndex}/> 
        </ul>
      </div>}
      <div className="w-full">
        <PlanetsAboutContent planet={planet} info={selectedData}/>
      </div>
      <div className="max-w-[768px] h-auto flex flex-col gap-[8px] mt-[28px] px-sm mb-[50px]">
          {Object.keys(facts).map(key => (
             <PlanetsFactCard key={key} facts={labels[key] || key} info={facts[key]} />
          ))}
      </div>
    </section>
  )
}
