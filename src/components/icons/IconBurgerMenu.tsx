import { useState } from "react"



export const IconBurgerMenu = ({ onValueChange }:any) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleBurger = () => {
    setIsOpen(!isOpen)
    onValueChange(isOpen)
  }
  return (
    <>
      <div onClick={toggleBurger} className="w-[24px] h-[17px]">
        <svg width="32.000000" height="25.000000" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="filter_0_1922_dd" x="0.000000" y="0.000000" width="32.000000" height="25.000000" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="0" dy="4"/>
              <feGaussianBlur stdDeviation="1.33333"/>
              <feComposite in2="hardAlpha" operator="out" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect_dropShadow_1"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect_dropShadow_1" result="shape"/>
            </filter>
          </defs>
          <g filter="url(#filter_0_1922_dd)">
            <rect id="Rectangle" x="4.000000" width="24.000000" height="3.000000" fill="#FFFFFF" fill-opacity="1.000000"/>
            <rect id="Rectangle" x="4.000000" width="24.000000" height="3.000000" stroke="#979797" stroke-opacity="0" stroke-width="0.000000"/>
            <rect id="Rectangle Copy" x="4.000000" y="7.000000" width="24.000000" height="3.000000" fill="#FFFFFF" fill-opacity="1.000000"/>
            <rect id="Rectangle Copy" x="4.000000" y="7.000000" width="24.000000" height="3.000000" stroke="#979797" stroke-opacity="0" stroke-width="0.000000"/>
            <rect id="Rectangle Copy 2" x="4.000000" y="14.000000" width="24.000000" height="3.000000" fill="#FFFFFF" fill-opacity="1.000000"/>
            <rect id="Rectangle Copy 2" x="4.000000" y="14.000000" width="24.000000" height="3.000000" stroke="#979797" stroke-opacity="0" stroke-width="0.000000"/>
          </g>
        </svg>
      </div>
    </>

  )
}
