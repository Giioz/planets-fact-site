import { useState } from "react";

export function useWindowSize(){
    const [size, setSize] = useState(0)
    function updateSize(){
        setSize(window.innerWidth)
    }
    window.addEventListener('resize', updateSize)
    return size
}