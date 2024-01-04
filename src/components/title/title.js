import React from "react";
import './title.scss';

export const Title = ({ title, size, className }) => {
    return (
        <div className={`title ${className}`}>
            <h1 className="title_wrapper">
                <span className="title_item" style={size && { fontSize: size + 'px'}}>{title}</span>
            </h1>
        </div>
    );
};
