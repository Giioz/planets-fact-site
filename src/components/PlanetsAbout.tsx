import { useState } from "react";
import { PlanetsAboutContent } from "./shared/PlanetsAboutContent";
import { PlanetsFactCard } from "./shared/PlanetsFactCard";
import { PlanetsInfoItems } from "./shared/PlanetsInfoItems";
import { PlanetsImageSection } from "./shared/PlanetsImageSection";
import { PlanetsInfoItemsDesktop } from "./shared/PlanetsInfoItemsDesktop";

export const PlanetsAbout = ({planet, isMobile}:any) => {

  const [selectedData, setSelectedData] = useState(planet["overview"]);
  const [activeIndex, setActiveIndex] = useState(Number);
  const [listKey, setKey] = useState("overview")
  
  let facts = planet.facts
  let isDesktop = !isMobile
  const labels:any = {
    rotation: "Rotation Time",
    revolution: "Revolution Time",
    radius: "Radius",
    temperature: "Temperature",
  };
  

  const handleClick = ( key : any, index: number) => {
    if(selectedData != planet[key]){
      setSelectedData(planet[key])
    }
    setKey(key)
    setActiveIndex(index)
  }
 

  return (
    <section>
      {/* on mobile devices */}
      {isMobile && 
        <div className="border-b-[1px] border-t-[1px] border-[#979797] border-opacity-[20%]">
          <ul className="w-auto min-h-[50px] pt-[20px] text-white flex px-[24px]  max-gap-[44px] text-[12px] font-bold tracking-[2.6px] leading-[25px] justify-between items-center">
            <PlanetsInfoItems planetName={planet.name} handleClik={handleClick} activeIndex={activeIndex}/> 
          </ul>
        </div>
      }
      <div className="w-full lg:flex lg:gap-[300px] lg:pl-[335px]">
        <PlanetsImageSection planet={planet}/>
        <div className="w-full px-sm flex justify-center md:justify-between md:px-md md:h-[200px] lg:flex-col lg:gap-[55px] lg:pt-[112px]">
          <PlanetsAboutContent planet={planet} listKey={listKey}/>
          {isDesktop && 
            <PlanetsInfoItemsDesktop planet={planet} handleClick={handleClick} activeIndex={activeIndex}/>
          }
        </div>
      </div>
      <div className="w-full h-auto flex flex-col gap-[8px] mt-[28px] px-sm mb-[50px] md:flex-row md:h-[88px] md:px-md md:mt-[57px] lg:h-[128px] lg:justify-center">
          {Object.keys(facts).map(key => (
             <PlanetsFactCard key={key} facts={labels[key] || key} info={facts[key]} />
          ))}
      </div>
    </section>
  )
}
