import React from "react";
import { useTranslation } from 'react-i18next';
import "./button.scss";

export const Button = ({
    text,
    size,
    onClick,
    type,
    noMargin = false,
    className,
    isLowercase = false,
}) => {
    const { i18n } = useTranslation();
    const language = i18n.language;
    const locale = language.slice(0, 2);

    return (
        <button
            className={`button  ${className} ${locale === 'he' && 'button-he'}`}
            onClick={onClick}
            type={type}
            style={!noMargin ? { margin: "0 auto" } : null}
        >
            <p className={`button_text ${size} ${isLowercase && "isLowercase"}`}>
                {text}
            </p>
        </button>
    );
};
