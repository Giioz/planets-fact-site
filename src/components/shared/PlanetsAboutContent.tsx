import { WikiArrow } from "../icons/WikiArrow"

export const PlanetsAboutContent = ({planet}:any) => {
  return (
    <>
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
    </>

  )
}
