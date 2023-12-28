import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FadeIn } from "../animations/fadeIn";
import { Button } from "../button/button";
import { Logo } from "../logo/logo";
import './header.scss';

export const Header = () =>  {
    const navigate = useNavigate();

    return (
        <FadeIn>
            <header className="header">
                <Link to='/home'><Logo /></Link>
                <Button text={'menu'} noMargin></Button>
            </header>
        </FadeIn>
    )
}
