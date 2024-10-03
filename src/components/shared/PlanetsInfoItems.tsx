
export const PlanetsInfoItems = ({planetName, handleClik, activeIndex}:any) => {
    const listItems = [
        { key: "overview", label: "OVERVIEW" },
        { key: "structure", label: "STRUCTURE" },
        { key: "geology", label: "SURFACE" }
        ];
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
    <>
        {listItems.map((item:any, index:number) => (
            <li key={item.key} 
                onClick={() => handleClik(item.key, index)} 
                className={`pb-[21px] align-text-top
                ${activeIndex === index ? ` ${borderColors[planetName]} border-b-[3px]` : ''}`}>
            {item.label}
            </li>
        ))}
    </>
  )
}
