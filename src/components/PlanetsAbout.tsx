import { WikiArrow } from "./icons/WikiArrow"

export const PlanetsAbout = ({planet}:any) => {
  return (
    <section>
      <div className="border-b-[1px] border-t-[1px] border-[#979797] border-opacity-[20%]">
        <ul className="w-auto text-white flex px-[24px] py-[20px] max-gap-[44px] text-[12px] font-bold tracking-[2.6px] leading-[25px] justify-between">
          <li>OVERVIEW</li>
          <li>STRUCTURE</li>
          <li>SURFACE</li>
        </ul>
      </div>
      {/* gasatania komponentad??idk */}
      <div className="min-w-[111px] max-w-[300px] h-[111px] m-auto my-[98px]">
        <img src={planet.images.planet} alt={planet.name} className="w-full h-full" />
      </div>
      <div className="max-w-[350px] text-center m-auto px-sm">
        <h1 className="text-white text-[40px] font-medium">{planet.name}</h1>
        <p className="text-white text-[11px] leading-[22px] font-normal mt-[16px] mb-[32px]">
          {planet.overview.content}
        </p>
        <div className="flex justify-center">
          <p className="text-white opacity-[50%] flex items-center gap-[3px] font-thin">Source : <a className="underline underline-offset-2 flex items-center gap-[5px] cursor-pointer font-medium" href={planet.overview.source}>Wikipedia <WikiArrow /></a> </p>
        </div>
      </div>
      {/* gasatania calke komponentad */}
      <div className="max-w-[768px] h-auto flex flex-col gap-[8px] mt-[28px] px-sm mb-[50px]">
          <div className="h-[48px] w-full border-[1.5px] px-[24px] py-[13px] border-[#D8D8D8] border-opacity-[20%] text-white flex justify-between items-center">
            <p className="text-[8px] font-bold leading-[16px] tracking-[0.7px] opacity-[50%]">ROTATION TIME</p>
            <p className="text-[20px] font-medium tracking-[-1px]">{planet.rotation}</p>
          </div>
          <div className="h-[48px] w-full border-[1.5px] px-[24px] py-[13px] border-[#D8D8D8] border-opacity-[20%] text-white flex justify-between items-center ">
            <p className="text-[8px] font-bold leading-[16px] tracking-[0.7px] opacity-[50%]">ROTATION TIME</p>
            <p className="text-[20px] font-medium tracking-[-1px]">{planet.revolution}</p>
          </div>
          <div className="h-[48px] w-full border-[1.5px] px-[24px] py-[13px] border-[#D8D8D8] border-opacity-[20%] text-white flex justify-between items-center">
            <p className="text-[8px] font-bold leading-[16px] tracking-[0.7px] opacity-[50%]">ROTATION TIME</p>
            <p className="text-[20px] font-medium tracking-[-1px]">{planet.radius}</p>
          </div>
          <div className="h-[48px] w-full border-[1.5px] px-[24px] py-[13px] border-[#D8D8D8] border-opacity-[20%] text-white flex justify-between items-center">
            <p className="text-[8px] font-bold leading-[16px] tracking-[0.7px] opacity-[50%]">ROTATION TIME</p>
            <p className="text-[20px] font-medium tracking-[-1px]">{planet.temperature}</p>
          </div>
      </div>
    </section>
  )
}
