import React, { useRef, useEffect } from "react";
import anime from "animejs";

export const PageTransition = ({children}) => {
  const svgRef = useRef(null);

  useEffect(() => {
    // Trigger the SVG animation when the component mounts
    anime({
        targets: svgRef.current,
        scaleY: [1, 0], // Decrease height from 100% to 0
        transformOrigin: ['50% 0%', '50% 0%'],
        easing: "easeInOutQuad",
        duration: 1500,
        complete: () => {
            // Animation completed, add another animation for the curve
                anime({
                    targets: '.morph',
                    d: 'M0,100 Q50,0 100,100 Z', // Transition to the curved path
                    easing: 'easeInOutQuad',
                    duration: 1000,
                    complete: () => {
                        // Curve animation completed
                        console.log('Curve animation completed');
                    },
                });
            },
        });
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
        <svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{
                width: "100%",
                height: "100vh",
                position: "absolute",
                top: 0,
                zIndex: 1,
            }}
        >
            {/* <rect width="100%" height="100%" fill="#000" /> */}
            <path className='morph' d="M0,100 L100,100 Q50,0 0,100 Z" fill="red" /> 
      </svg>
     {children}
    </>
  );
};
