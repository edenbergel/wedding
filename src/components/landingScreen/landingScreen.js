import React from "react";
import { useNavigate } from "react-router-dom";
import { FadeIn } from "../animations/fadeIn";
import { Button } from "../button/button";
import { Logo } from "../logo/logo";
import "./landingScreen.scss";

export const LandingScreen = () => {
    const navigate = useNavigate();

    return (
        <FadeIn>
            <div className="landing">
                <Logo />
                <h1 className="landing_title">
                    For our <br /> favourite people
                </h1>
                <Button
                    text={"explore our love"}
                    size={"medium"}
                    onClick={() => navigate('/events')}
                />
            </div>
        </FadeIn>
        
    );
};
