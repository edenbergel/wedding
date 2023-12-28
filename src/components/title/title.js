import React from "react";
import './title.scss';

export const Title = ({ title, size = 25 }) => {
    return (
        <div className="title">
            <h1 className="title_wrapper">
                <span className="title_item" style={{ fontSize: size + 'px'}}>{title}</span>
            </h1>
        </div>
    );
};
