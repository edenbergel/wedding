import React from "react";
import "./button.scss";

export const Button = ({ text, size, onClick, type, noMargin = false, className }) => {
    return (
        <button
            className={`button  ${className}`}
            onClick={onClick}
            type={type}
            style={!noMargin ? { margin: "0 auto" } : null}
            >
            <p className={`button_text ${size}`}>{text}</p>
        </button>
    );
};
