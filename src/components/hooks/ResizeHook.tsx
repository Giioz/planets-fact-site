import { useEffect, useState } from "react";

export function useWindowSize() {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener("resize", updateSize);       
        updateSize();

        return () => window.removeEventListener("resize", updateSize);
    }, []); 

    return size;
}