import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../svgs";
import { FadeIn } from "../animations/fadeIn";
import { Button } from "../button/button";
import "./landingScreen.scss";
import { useTranslation } from 'react-i18next';
import { LanguagePicker } from "../languagePicker/languagePicker";
import { useMediaQuery } from 'react-responsive';

export const LandingScreen = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [height, setHeight] = useState('100vh');
    const isMobile = useMediaQuery({ maxWidth: 1023 });

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        if (isMobile) {
            setHeight(window.innerHeight + 'px');  
        }

        return () => {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }
    }, [isMobile])

    return (
        <>
            <FadeIn>
                <div 
                    className={'landing'}
                    style={{ height }}
                >
                    <div className="landing_children">
                        <Logo className={'logo'} />
                    
                        <h1 className="landing_title"
                            dangerouslySetInnerHTML={{
                                __html: t('landingTitle', { lineBreak: '<br />' })
                            }}
                        />
                        <Button
                            text={t('landingButton')}
                            size={"medium"}
                            onClick={() => navigate('/events')}
                        />
                    </div>
                    <LanguagePicker />
                </div>
            </FadeIn>
        </>
    );
};
