
export const PlanetsInfoItemsDesktop = ({planet, handleClick, activeIndex}:any) => {
   const listItems = [
    { key: "overview", label: "OVERVIEW" },
    { key: "structure", label: "STRUCTURE" },
    { key: "geology", label: "SURFACE" }
    ];
    const bgColors:any = {
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
    {/* styles for tablet */}
        <div className="min-w-[281px] max-w-[350px] h-full flex flex-col justify-center gap-[16px]">
            {listItems.map((item:any, index:number) => (
                <div 
                    className={`cursor-pointer text-white flex py-[8px] pl-[20px] border-[1px] border-[#D8D8D8] border-opacity-[20%] gap-[28px]
                    ${activeIndex === index ? ` ${bgColors[planet.name]}` : ''}`}
                    onClick={() => handleClick(item.key, index)}
                    key={item.key} 
                > 
                    <p>0{index+1}</p>
                    <li className="list-none">
                        {item.label}
                    </li>
                </div>
            ))}
        </div>
    </>
  )
}
