import  { useState, useEffect } from "react";

export default function useMousePos() {

    interface MousePos {
        x: number,
        y: number
    }

    const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (event: Event | any) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    return { mousePos }
}