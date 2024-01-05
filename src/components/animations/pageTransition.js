import React, { useEffect, useState } from "react";
import './pageTransition.scss';

export const PageTransition = ({ children }) => {
    const [showTransition, setTransition] = useState(false)

    useEffect(() => {
        setTransition(true)
    }, [])

    return (
        <div className={`${showTransition && 'transition'}`}>
            {showTransition && children}
        </div>
    );
};
