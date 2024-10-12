// src/components/atoms/CustomCursor.tsx
import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        const handleMouseEnter = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.tagName === 'BUTTON' || target.closest('button')) {
                setHovered(true);
            }
        };

        const handleMouseLeave = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.tagName === 'BUTTON' || target.closest('button')) {
                setHovered(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseEnter);
        window.addEventListener('mouseout', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseEnter);
            window.removeEventListener('mouseout', handleMouseLeave);
        };
    }, []);

    return (
        <>
            <div
                id="invertedcursor"
                style={{
                    top: `${position.y}px`,
                    left: `${position.x}px`,
                    width: hovered ? '40px' : '20px', // Double the size on hover
                    height: hovered ? '40px' : '20px', // Double the size on hover
                    position: 'fixed', // Change to fixed
                    background: '#fff',
                    borderRadius: '50%',
                    zIndex: 9999, // Make sure it's on top of other elements
                    mixBlendMode: 'difference',
                    pointerEvents: 'none',
                    transition: 'width 0.2s ease, height 0.2s ease',
                    transform: 'translate(-50%, -50%)', // Center the cursor on the mouse position
                }}
            ></div>
            <style>{`
                body {
                    cursor: none; /* Hide the default cursor */
                }
            `}</style>
        </>
    );
};

export default CustomCursor;
