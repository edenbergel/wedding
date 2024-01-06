import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../svgs";
import { FadeIn } from "../animations/fadeIn";
import { Button } from "../button/button";
import Menu from "../menu/menu";
import { useTranslation } from 'react-i18next';
import './header.scss';

export const Header = () =>  {
    const [showMenu, setShowMenu] = useState(null)
    const { t, i18n } = useTranslation();
    const language = i18n.language;

    useEffect(() => {
        return () => setShowMenu(null);
    }, [])

    return (
        <>
            <FadeIn>
                <header className={`header ${language === 'he-IL' && 'header-he'}`}>
                    <Link to='/events'><Logo className={'header_logo'}/></Link>
                    <Button text={t('headerButton')} isLowercase noMargin onClick={() => setShowMenu('active')} className={'header_btn'} />
                </header>
            </FadeIn>
            <Menu showMenu={showMenu} setShowMenu={setShowMenu} t={t} language={language} />
        </>
    )
}
