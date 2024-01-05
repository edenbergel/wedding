import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Logo, Back, Link, Tampon } from '../../svgs';
import './menu.scss';

const Menu = ({ showMenu, setShowMenu }) => {
    const navItems = ['events', 'invitation', 'rsvp'];
    const navigate = useNavigate();
    const location = useLocation();

    const hideMenu = (route) => {
        setShowMenu('inactive');

        if (route) {
            navigate(`/${route}`);
        }
    }
    return (
        <div className={`menu ${showMenu === 'active' ? 'active' : showMenu === 'inactive' ? 'inactive' : 'hide'}`}>
            <div className='menu_upper_content'>
                <Logo className={'menu_logo'} />
                <div onClick={() => hideMenu()}>
                    <Back className={'menu_back'} />
                </div>
            </div>

            <nav className='menu_nav'>
                <ul className='menu_nav_content'>
                    {
                        navItems.map((item, i) => (
                            <li key={i} className={`menu_nav_item ${location.pathname === `/${item}` && 'is_active'}`}  onClick={() => hideMenu(item)}>
                                <p>{item}</p>
                                <Link className={'menu_item_icon'} />
                            </li>
                        ))
                    }
                </ul>
                <Tampon className={'spin'} />
            </nav>
        </div>
    )
}

export  default Menu;