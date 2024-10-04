import { useEffect, useState } from "react";

export function useWindowSize() {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        };

        // Set up the event listener
        window.addEventListener("resize", updateSize);

        // Call updateSize initially to set the size based on the current window size
        updateSize();

        // Clean up the event listener on component unmount
        return () => window.removeEventListener("resize", updateSize);
    }, []); // The empty array means this effect runs only once when the component mounts

    return size; // Return the current size
}