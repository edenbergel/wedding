import React, { useState } from "react";
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

export const Events = () => {
    const { t, i18n } = useTranslation();

    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();
    const goTo = (index = 0) => {
        const total = 3;
        index = ((index % total) + total) % total;
        setCurrent(index);
    };

    const next = () => {
        goTo(current + 1);
    };
    const language = i18n.language;
    const locale = language.slice(0, 2)

    return (
        <>
            <PageTransition>
                <Header />
                <section className={`events ${locale === "he" && 'events-he'}`}>
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
