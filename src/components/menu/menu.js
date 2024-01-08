import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo, Back, Link, Tampon } from "../../svgs";
import { LanguagePicker } from "../languagePicker/languagePicker";
import { useMediaQuery } from 'react-responsive';
import "./menu.scss";

const Menu = ({ showMenu, setShowMenu, t, language }) => {
    const navItems = ["events", "invitation", "rsvp"];
    const navigate = useNavigate();
    const location = useLocation();
    const [height, setHeight] = useState('auto');
    const isMobile = useMediaQuery({ maxWidth: 1023 });
    
    const hideMenu = (route) => {
        setShowMenu("inactive");

        if (route) {
            navigate(`/${route}`);
        }
    };

    useEffect(() => {
        if (isMobile) {
            setHeight(window.innerHeight - 60 + 'px');
        } else {
            setHeight(window.innerHeight - 124 + 'px');
        }
    }, [isMobile])

    return (
        <div
            className={`menu 
                    ${
                    showMenu === "active"
                        ? "active"
                        : showMenu === "inactive"
                        ? "inactive"
                        : "hide"
                    }`}
        >
            <div className={`menu_upper_content ${language === 'he-IL' && 'menu_upper_content-he'}`}>
                <Logo className={"menu_logo"} />
                <div onClick={() => hideMenu()}>
                    <Back className={"menu_back"} />
                </div>
            </div>

            <nav className="menu_nav" style={showMenu && { height }}>
                <ul className="menu_nav_content">
                    {navItems.map((item, i) => (
                        <li
                            key={i}
                            className={`menu_nav_item ${
                                location.pathname === `/${item}` && "is_active"
                            } ${language === 'he-IL' && 'menu_nav_item-he'}`}
                            onClick={() => hideMenu(item)}
                        >
                            <p>{t(`${item}NavItem`)}</p>
                            <Link className={"menu_item_icon"} />
                        </li>
                    ))}
                </ul>
                <div className={`menu_bottom ${language === 'he-IL' && 'menu_bottom-he'}`}>
                    <LanguagePicker />
                    <Tampon className={"spin"} />
                </div>
            </nav>
        </div>
    );
};

export default Menu;
