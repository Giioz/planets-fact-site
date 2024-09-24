import { WikiArrow } from "./icons/WikiArrow"

export const PlanetsAbout = () => {
  return (
    <section className="px-sm">
      <div className="border-b-[1px] border-t-[1px] border-[#979797] border-opacity-[20%]">
        <ul className="w-auto text-white flex px-[24px] py-[20px] max-gap-[44px] text-[12px] font-bold tracking-[2.6px] leading-[25px] justify-between">
          <li>OVERVIEW</li>
          <li>STRUCTURE</li>
          <li>SURFACE</li>
        </ul>
      </div>
      <div className="w-[111px] h-[111px] m-auto my-[98px]">
        <img src="./public/assets/planet-mercury.svg" alt="Mercury"/>
      </div>
      <div className="max-w-[327px] text-center m-auto">
        <h1 className="text-white text-[40px] font-medium">MERCURY</h1>
        <p className="text-white text-[11px] leading-[22px] font-normal mt-[16px] mb-[32px]">
          Mercury is the smallest planet in the Solar System and
           the closest to the Sun. Its orbit around the Sun takes
           87.97 Earth days, the shortest of all the Sun's planets.
           Mercury is one of four terrestrial planets
           in the Solar System, and is a rocky body like Earth.
        </p>
        <div className="flex justify-center">
          <p className="text-white opacity-[50%] flex items-center gap-[3px] font-thin">Source : <a className="underline underline-offset-2 flex items-center gap-[5px] cursor-pointer font-medium" href="https:facebook.com">Wikipedia <WikiArrow /></a> </p>
        </div>
      </div>
      <div className="max-w-[768px] h-auto flex flex-col gap-[8px] mt-[28px]">
          <div className="h-[48px] w-full border-[1.5px] px-[24px] py-[13px] border-[#D8D8D8] border-opacity-[20%] text-white flex justify-between items-center">
            <p className="text-[8px] font-bold leading-[16px] tracking-[0.7px] opacity-[50%]">ROTATION TIME</p>
            <p className="text-[20px] font-medium tracking-[-1px]">124 DAYS</p>
          </div>
          <div className="h-[48px] w-full border-[1.5px] px-[24px] py-[13px] border-[#D8D8D8] border-opacity-[20%] text-white flex justify-between items-center">
            <p className="text-[8px] font-bold leading-[16px] tracking-[0.7px] opacity-[50%]">ROTATION TIME</p>
            <p className="text-[20px] font-medium tracking-[-1px]">124 DAYS</p>
          </div>
          <div className="h-[48px] w-full border-[1.5px] px-[24px] py-[13px] border-[#D8D8D8] border-opacity-[20%] text-white flex justify-between items-center">
            <p className="text-[8px] font-bold leading-[16px] tracking-[0.7px] opacity-[50%]">ROTATION TIME</p>
            <p className="text-[20px] font-medium tracking-[-1px]">124 DAYS</p>
          </div>
          <div className="h-[48px] w-full border-[1.5px] px-[24px] py-[13px] border-[#D8D8D8] border-opacity-[20%] text-white flex justify-between items-center">
            <p className="text-[8px] font-bold leading-[16px] tracking-[0.7px] opacity-[50%]">ROTATION TIME</p>
            <p className="text-[20px] font-medium tracking-[-1px]">124 DAYS</p>
          </div>
      </div>
    </section>
  )
}
