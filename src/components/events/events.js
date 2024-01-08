import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import eventsData from "../../events";
import { PageTransition } from "../animations/pageTransition";
import { Button } from "../button/button";
import { Header } from "../header/header";
import { ProgressBar } from "../progressBar/progressBar";
import { Title } from "../title/title";
import Event from "./event";
import "./events.scss";
import { useTranslation } from 'react-i18next';
import { useSwiper } from "../swiper";
import { useMediaQuery } from 'react-responsive';

export const Events = () => {
    const { t, i18n } = useTranslation();

    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();
    const { onTouchStart, onTouchMove, onTouchEnd } = useSwiper();
    const [height, setHeight] = useState('auto');
    const isMobile = useMediaQuery({ maxWidth: 1023 });

    const goTo = (index = 0) => {
        const total = 3;
        index = ((index % total) + total) % total;
        setCurrent(index);
    };

    const previous = e => {
		e.stopPropagation();
		goTo(current - 1);
	};

	const next = e => {
		e.stopPropagation();
		goTo(current + 1);
	};
    
    const language = i18n.language;
    const locale = language.slice(0, 2)

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        
        if (isMobile) {
            setHeight(window.innerHeight - 60 + 'px');  
        }
    }, [isMobile])

    return (
        <>
            <PageTransition>
                <Header />
                <section 
                    className={`events ${locale === "he" && 'events-he'}`} 
                    onTouchEnd={e => onTouchEnd(next, previous, e)}
                    onTouchMove={onTouchMove}
                    onTouchStart={onTouchStart}
                    style={isMobile ? { height } : null}
                >
                    <ProgressBar current={current} />
                    <Title
                        title={
                            <>
                                {t('dudeName')}{" "}
                                <span className="break_line">
                                    <span>{t('and')}{" "}</span>
                                    <span>{t('queenName')}</span>
                                </span>
                            </>
                        }
                        className={"event_title"}
                    />
                    {eventsData[locale].map((event, index) => (
                        <Event
                            key={event.name}
                            event={event}
                            index={index}
                            next={next}
                            current={current}
                            t={t}
                            locale={locale}
                        />
                    ))}
                    <Button
                        className={"event_btn_desktop"}
                        text={t('invitationButton')}
                        onClick={() => navigate("/invitation")}
                    />
                </section>
            </PageTransition>
        </>
    );
};
