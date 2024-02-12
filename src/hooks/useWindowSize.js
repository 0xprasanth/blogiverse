
import { useState, useEffect } from "react";


const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        handleResize();

        // run at load time
        window.addEventListener("resize", handleResize);


        const cleanUp = () => {
            console.log(" runs if useEffect depen changes");
            window.removeEventListener("resize", handleResize);
        }

        return cleanUp
    }, [])

    return windowSize
}

export default useWindowSize;