import React, { useState, useEffect } from 'react';
import './slide.scss';

export const Slide = ({ children, isVisible, className }) => {
    const [isTransitioning, setTransitioning] = useState(false);

    useEffect(() => {
        const slide = setTimeout(() => {
            setTransitioning(isVisible);
        }, 200)

        return () => clearTimeout(slide);
        
    }, [isVisible]);

    return (
        <div className={`slide-transition ${className} ${isTransitioning ? 'transitioning' : ''}`}>
            {children}
        </div>
    );
};

