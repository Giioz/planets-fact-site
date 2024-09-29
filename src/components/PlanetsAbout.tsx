import { useState } from "react";
import { PlanetsAboutContent } from "./shared/PlanetsAboutContent";
import { PlanetsFactCard } from "./shared/PlanetsFactCard"

export const PlanetsAbout = ({planet}:any) => {
  let facts = planet.facts
  const labels:any = {
    rotation: "Rotation Time",
    revolution: "Revolution Time",
    radius: "Radius",
    temperature: "Temperature",
  };

  const [selectedData, setSelectedData] = useState(planet["overview"]);
  const [activeIndex, setActiveIndex] = useState(Number);

  const handleClick = ( key : any, index: number) => {
    if(selectedData != planet[key]){
      setSelectedData(planet[key])
    }
    console.log(planet)
    setActiveIndex(index)
  }
  const listItems = [
    { key: "overview", label: "OVERVIEW" },
    { key: "structure", label: "STRUCTURE" },
    { key: "geology", label: "SURFACE" }
  ];

  

  return (
    <section>
      <div className="border-b-[1px] border-t-[1px] border-[#979797] border-opacity-[20%]">
        <ul className="w-auto min-h-[50px] pt-[20px] text-white flex px-[24px]  max-gap-[44px] text-[12px] font-bold tracking-[2.6px] leading-[25px] justify-between items-center">
          {listItems.map((item, index) => (
            <li key={item.key} 
                onClick={() => handleClick(item.key, index)} 
                className={`pb-[21px] align-text-top
                ${activeIndex === index ? ` border-${planet.name.toLowerCase()} border-b-[3px]` : ''}`}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
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
