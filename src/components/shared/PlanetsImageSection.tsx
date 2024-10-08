export const PlanetsImageSection = ({planet}:any) => {
  return (
    <div className="min-w-[111px] max-w-[300px] h-[111px] m-auto my-[98px] lg:w-[400px] lg:h-[400px]">
        <img src={planet.images.planet} alt={planet.name} className="w-full h-full" />
    </div>
  )
}
