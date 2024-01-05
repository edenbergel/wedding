import React from "react";
import "./button.scss";

export const Button = ({ text, size, onClick, type, noMargin = false, className, isLowercase = false }) => {
    return (
        <button
            className={`button  ${className}`}
            onClick={onClick}
            type={type}
            style={!noMargin ? { margin: "0 auto" } : null}
            >
            <p className={`button_text ${size} ${isLowercase && 'isLowercase'}`}>{text}</p>
        </button>
    );
};
