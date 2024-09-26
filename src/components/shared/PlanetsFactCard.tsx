
export const PlanetsFactCard = ({facts, info}:any) => {
  return (
    <div className="h-[48px] w-full border-[1.5px] px-[24px] py-[13px] border-[#D8D8D8] border-opacity-[20%] text-white flex justify-between items-center">
        <p className="text-[8px] font-bold leading-[16px] tracking-[0.7px] opacity-[50%]">{facts.toUpperCase()}</p>
        <p className="text-[20px] font-medium tracking-[-1px]">{info}</p>
    </div>
  )
}
