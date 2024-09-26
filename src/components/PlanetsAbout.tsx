import { PlanetsAboutContent } from "./shared/PlanetsAboutContent";
import { PlanetsFactCard } from "./shared/PlanetsFactCard"

export const PlanetsAbout = ({planet}:any) => {
  const facts = planet.facts
  const labels:any = {
    rotation: "Rotation Time",
    revolution: "Revolution Time",
    radius: "Radius",
    temperature: "Temperature",
  };
  console.log(labels["rotation"])
  return (
    <section>
      <div className="border-b-[1px] border-t-[1px] border-[#979797] border-opacity-[20%]">
        <ul className="w-auto text-white flex px-[24px] py-[20px] max-gap-[44px] text-[12px] font-bold tracking-[2.6px] leading-[25px] justify-between">
          <li value={"overview"}>OVERVIEW</li>
          <li value={"structure"}>STRUCTURE</li>
          <li value={"geology"}>SURFACE</li>
        </ul>
      </div>
      <div className="w-full">
        <PlanetsAboutContent planet={planet}/>
      </div>
      <div className="max-w-[768px] h-auto flex flex-col gap-[8px] mt-[28px] px-sm mb-[50px]">
          {Object.keys(facts).map(key => (
             <PlanetsFactCard key={key} facts={labels[key] || key} info={facts[key]} />
          ))}
      </div>
    </section>
  )
}
