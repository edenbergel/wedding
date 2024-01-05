import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../svgs";
import { FadeIn } from "../animations/fadeIn";
import { Button } from "../button/button";
import Menu from "../menu/menu";
import './header.scss';

export const Header = () =>  {
    const [showMenu, setShowMenu] = useState(null)

    useEffect(() => {
        return () => setShowMenu(null);
    }, [])

    return (
        <>
            <FadeIn>
                <header className="header">
                    <Link to='/events'><Logo className={'header_logo'}/></Link>
                    <Button text={'menu'} isLowercase noMargin onClick={() => setShowMenu('active')} className={'header_btn'} />
                </header>
            </FadeIn>
            <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        </>
    )
}
