import React, { useState } from 'react'
import { FadeIn } from '../animations/fadeIn';
import { Events } from '../events/events';
import { Header } from '../header/header';
import { LandingScreen } from '../landingScreen/landingScreen';
import './home.scss';

export const Home = () => {
    const [showInitialScreen, setShowInitialScreen] = useState(true);

    const handleButtonClick = () => {
        setTimeout(() => {
            setShowInitialScreen(false);
        }, 800);
    };

    return (
        <>
            { !showInitialScreen && <Header /> }
        
            <main className="main">
                {showInitialScreen ? (
                    <FadeIn>
                        <LandingScreen handleButtonClick={handleButtonClick} />
                    </FadeIn>
                ) : (
                    <Events />
                )}
            </main>
        </>
    )
}
