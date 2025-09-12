import { useEffect, useRef, useState } from "react";
import "./world.css";

export default function World() {
    const characterRef = useRef(null);
    const [positionX, setPositionX] = useState(0); // posição horizontal em %
    

    useEffect(() => {
        const handleKeyDown = (e) => {
            
            if (e.key === "ArrowRight") {
                setPositionX((prev) => Math.min(prev + 1, 90));
            } else if (e.key === "ArrowLeft") {
                setPositionX((prev) => Math.max(prev - 1, 0));
            } 
        };

        

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <section>
            <div className="world">
                <div
                    ref={characterRef}
                    className="character"
                    style={{ left: `${positionX}%`}}
                ></div>
                <div className="ground"></div>
            </div>
        </section>
    );
}