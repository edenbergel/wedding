import React, { useRef } from "react";

export const PageTransition = ({children}) => {
  const svgRef = useRef(null);

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
