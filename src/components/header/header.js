import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "../animations/fadeIn";
import { Button } from "../button/button";
import { Logo } from "../logo/logo";
import Menu from "../menu/menu";
import './header.scss';

export const Header = () =>  {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <FadeIn>
                <header className="header">
                    <Link to='/events'><Logo /></Link>
                    <Button text={'menu'} noMargin onClick={() => setShowMenu(!showMenu)}></Button>
                </header>
            </FadeIn>
            {showMenu && <Menu setShowMenu={setShowMenu} />}
        </>
    )
}
