import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                window.getComputedStyle(target).cursor === 'pointer'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <style>{`
        body {
          cursor: none !important;
        }
        button, a, select, input, [role="button"], .cursor-pointer {
          cursor: none !important;
        }
        .cursor-arrow {
          position: fixed;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          pointer-events: none;
          z-index: 10000;
          /* Tip of arrow exactly at mouse position */
          margin-top: -1px;
          margin-left: -1px;
          transition: transform 0.15s ease-out;
        }
      `}</style>
            <div
                className="cursor-arrow"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: isHovering ? 'scale(1.2)' : 'scale(1)'
                }}
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: 'rotate(-5deg)' }}
                >
                    <path
                        d="M3 3L10 21L13 13L21 10L3 3Z"
                        fill="#ccff00"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </>
    );
};

export default CustomCursor;
