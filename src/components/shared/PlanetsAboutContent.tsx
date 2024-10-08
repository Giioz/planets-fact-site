import { WikiArrow } from "../icons/WikiArrow"

export const PlanetsAboutContent = ({planet, listKey}:any) => {
  return (
    <>
      <div className="max-w-[350px] text-center md:text-start md:">
          <h1 className="text-white text-[40px] font-medium md:text-[48px]">{planet.name}</h1>
          <p className="text-white text-[11px] leading-[22px] font-normal mt-[16px] mb-[32px]">
          {planet[listKey].content}
          </p>
          <div className="flex justify-center min-w-[] md:justify-start">
            <p className="text-white opacity-[50%] flex items-center gap-[3px] font-thin">Source : <a className="underline underline-offset-2 flex items-center gap-[5px] cursor-pointer font-medium" href={planet[listKey].source}>Wikipedia <WikiArrow /></a> </p>
          </div>
      </div>
    </>

  )
}
