import React from "react";
import { Button } from "../button/button";
import { Logo } from "../logo/logo";
import "./landingScreen.scss";

export const LandingScreen = ({ handleButtonClick }) => {

    return (
        <div className="landing">
            <Logo />
            <h1 className="landing_title">
                For our <br /> favourite people
            </h1>
            <Button
                text={"explore our love"}
                size={"medium"}
                onClick={handleButtonClick}
            />
        </div>
    );
};
