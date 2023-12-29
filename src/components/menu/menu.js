import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Logo } from '../logo/logo';
import './menu.scss';

const Menu = ({ setShowMenu }) => {
    const navItems = ['events', 'invitation', 'rsvp'];
    const navigate = useNavigate();

    const hideMenu = (route) => {
        setShowMenu(false);

        if (route) {
            navigate(`/${route}`);
        }
    }
    return (
        <div className='menu'>
            <div className='menu_upper_content'>
                <Logo />
                <div onClick={() => hideMenu()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="20" viewBox="0 0 48 20" fill="none">
                        <path d="M46.5366 1.98145C43.1706 12.1584 37.7506 17.4914 30.2766 17.9814C22.8026 18.4714 13.1466 14.1244 1.30762 4.94345" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M1.30762 4.94331C2.61962 7.79131 3.41362 9.97031 3.68762 11.4813C3.96362 12.9913 3.96362 15.1713 3.68762 18.0183M1.94062 4.69131C5.01062 5.32931 7.31162 5.61131 8.84562 5.54031C10.3796 5.46831 12.5026 4.97831 15.2156 4.07031" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </div>
            </div>

            <nav className='menu_nav'>
                <ul className='menu_nav_content'>
                    {
                        navItems.map((item, i) => (
                            <li key={i} className='menu_nav_item'  onClick={() => hideMenu(item)}>
                                <p>{item}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                                    <path d="M16.9836 18.4994C16.4868 18.4373 15.8349 18.3132 15.5554 18.2821C15.245 18.2511 14.7482 18.3132 14.8414 17.506C14.9345 16.5746 15.276 13.5631 16.6421 9.52702C18.0391 5.33575 18.1944 5.11842 18.0391 4.93214C17.4182 4.15598 5.40324 15.8294 2.88848 17.6922C2.42278 18.0337 2.26755 17.8475 2.01918 17.506C1.73976 17.1955 1.27406 16.5435 1.27406 16.5435C1.27406 16.5435 0.777321 15.8915 0.528949 15.55C0.280577 15.2085 0.156392 14.9912 0.622089 14.6497C3.1058 12.7869 17.294 4.21808 16.9836 3.37982C16.8594 3.06936 16.7662 3.59715 12.3266 3.78343C8.07324 3.9697 5.09278 3.44191 4.16138 3.25564C3.38522 3.1004 3.60255 2.63471 3.63359 2.35529C3.66464 2.04482 3.75778 1.39285 3.81987 0.927152C3.97511 -0.128427 5.65161 1.02029 8.50789 1.51703C16.4558 2.88308 20.1503 1.26866 20.6781 1.17552C21.2059 1.08238 21.4232 1.23762 21.5164 1.3618C21.5164 1.33076 21.5474 1.39285 21.5164 1.3618C21.6405 1.51703 21.7337 1.79645 21.5164 2.26215C21.268 2.72785 18.6601 5.83249 17.7597 13.8425C17.3872 16.6987 18.0391 18.6236 16.9836 18.4994Z" fill="black"/>
                                </svg>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export  default Menu;