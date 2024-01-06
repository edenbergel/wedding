import React from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../svgs";
import { FadeIn } from "../animations/fadeIn";
import { Button } from "../button/button";
import "./landingScreen.scss";
import { useTranslation } from 'react-i18next';
import { LanguagePicker } from "../languagePicker/languagePicker";

export const LandingScreen = () => {
    const navigate = useNavigate();
    const { t } = useTranslation()

    return (
        <>
            <FadeIn>
                <div className="landing">
                    <LanguagePicker />
                    <Logo className={'logo'} />
                   
                    <h1 className="landing_title"
                        dangerouslySetInnerHTML={{
                            __html: t('landingTitle', { lineBreak: '<br />' }),
                        }}
                    />
                    <Button
                        text={t('landingButton')}
                        size={"medium"}
                        onClick={() => navigate('/events')}
                    />
                </div>
            </FadeIn>
        </>
    );
};
