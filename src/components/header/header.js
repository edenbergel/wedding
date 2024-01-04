import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../svgs";
import { FadeIn } from "../animations/fadeIn";
import { Button } from "../button/button";
import Menu from "../menu/menu";
import './header.scss';

export const Header = () =>  {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <FadeIn>
                <header className="header">
                    <Link to='/events'><Logo /></Link>
                    <Button text={'menu'} noMargin onClick={() => setShowMenu(!showMenu)} />
                </header>
            </FadeIn>
            {showMenu && <Menu setShowMenu={setShowMenu} />}
        </>
    )
}
