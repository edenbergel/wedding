import React from "react";
import "./input.scss";

export const Input = ({
    placeholder,
    value,
    onChange,
    type = "text",
    style,
    hasError,
    className
}) => {
        return (
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={`form_input ${className} ${hasError && "hasError"}`}
                style={style}
            />
        );
};
