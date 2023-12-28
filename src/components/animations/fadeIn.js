import React, { useState, useEffect } from 'react';
import './fadeIn.scss'; // Adjust the path based on your project structure

export const FadeIn = ({ children, delay = 0 }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const fadeIn = setTimeout(() => {
            setIsActive(true);
        }, delay)

        return () => clearTimeout(fadeIn);
    }, [delay]);

    return <div className={`fade-in ${isActive ? 'active' : ''}`}>{children}</div>;
};
