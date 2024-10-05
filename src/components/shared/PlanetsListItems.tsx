import { useState } from "react";

export const PlanetsListItems = ({planets, onPlanetClick, isMobile}:any) => {
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

    if(isMobile){
        return (
          <>
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
          </>
        )
    } 
    // for tablets >768px
    else if(!isMobile){
        const [activeIndex, setActiveIndex] = useState(Number);

        function handleClick(index: number): void {
            setActiveIndex(index)
        }

        const borderColors:any = {
            Mercury: "border-mercury",
            Venus: "border-venus",
            Earth: "border-earth",
            Mars: "border-mars",
            Jupiter: "border-jupiter",
            Saturn: "border-saturn",
            Uranus: "border-uranus",
            Neptune: "border-neptune"
        }; 

        return (
            <nav className="flex w-full text-white justify-between border-b-[1px] border-opacity-[10%] border-white ">

                {planets.map((planet:any, index:number)=>(
                    <li 
                        key={planet.name} 
                        onClick={() => {
                            onPlanetClick(planet);
                            handleClick(index);
                          }}
                        className={`list-none  py-[20px] cursor-pointer
                        ${activeIndex === index ? ` ${borderColors[planet.name.toLowerCase()]} border-t-[3px]` : ''}
                        `}
                    > 
                    {planet.name.toUpperCase()}
                    </li>
                ))}
            </nav>
        )
    }
}
