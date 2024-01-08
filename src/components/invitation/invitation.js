import React from "react";
import { useNavigate } from "react-router-dom";
import { PageTransition } from "../animations/pageTransition";
import { Button } from "../button/button";
import { Header } from "../header/header";
import { Title } from "../title/title";
import { useTranslation } from 'react-i18next';
import "./invitation.scss";
import { LittleFlower, Flower } from '../../svgs';
import { useMediaQuery } from 'react-responsive';

export const Invitation = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isMobile = useMediaQuery({ maxWidth: 1023 });
    const language = i18n.language;
    const locale = language.slice(0, 2);

    return (
        <>
            <Header />
            <PageTransition>
                <div className="invitation">
                    <div className="invitation_wrapper">
                        <h4 className="invitation_title">
                            {t('inviteTitle')}
                        </h4>
                        {locale !== "he" &&
                            <div className={`invitation_fam`}>
                                <p>Mme Rachel Bergel</p>
                                <p>Mme Hanna Mechaly</p>
                                <p>Eva & Leon Bergel</p>
                                <p>Mme Yerika Ephraim</p>
                                <p>Dafna & Charet Yeoshua</p>
                            </div>
                        }
                        <p 
                            className="invitation_intro" 
                            dangerouslySetInnerHTML={{
                                __html: t('inviteIntro', { lineBreak: '<br />' }),
                            }}
                        />
                        <Title title={t('dudeName') + ' ' + t('and') + ' ' + t('queenName')} />
                        <div className='invitation_content'>
                            <span className='invitation_date'>
                                <span className='invitation_preposition'>
                                    {t('the')}
                                </span>
                                {' '}{t('weekday')}{' '}
                                <span className='invitation_number'>{t('day')}</span> 
                                {' '}{t('month')}{' '}
                                <span className='invitation_number'>{t('year')}</span>
                            </span>
                            <p>
                                <span className='invitation_preposition'>{t('at')}</span>
                                {' '}
                                <span className='invitation_number'>{t('time')}</span>
                                <span className='invitation_preposition'>{t('hour')}</span>
                                <span className='invitation_number'>{t('minute')}</span>
                            </p>
                        </div>
                        <h6 className='invitation_address'>{t('inviteAddress')}</h6>
                        { locale === "he" &&
                            <div className={`invitation_fam ${locale === "he" && 'invitation_fam-he'}`}>
                                <p>Mme Rachel Bergel</p>
                                <p>Mme Hanna Mechaly</p>
                                <p>Eva & Leon Bergel</p>
                                <p>Mme Yerika Ephraim</p>
                                <p>Dafna & Charet Yeoshua</p>
                            </div>
                        }
                        
                        <p className='invitation_note'>{t('inviteConfirm')}</p>
                        <Button text={t('rsvpButton')} onClick={() => navigate('/rsvp')} />
                    </div>

                    {
                        isMobile && (
                            <>
                                <div className="invitation_flower invitation_flower_1">
                                    <LittleFlower />
                                </div>
                                <div className="invitation_flower invitation_flower_2">
                                    <LittleFlower />
                                </div>
                                <div className="invitation_flower invitation_flower_3">
                                    <LittleFlower />
                                </div>
                                <div className="invitation_flower invitation_flower_4">
                                    <LittleFlower />
                                </div>
                            </>
                        )
                    }

                    {
                        isDesktop && (
                            <>
                                <div className="invitation_flower_big invitation_flower_big_1">
                                    <Flower />
                                </div>
                                <div className="invitation_flower_big invitation_flower_big_2">
                                    <Flower />
                                </div>
                                <div className="invitation_flower_big invitation_flower_big_3">
                                    <Flower />
                                </div>
                                <div className="invitation_flower_big invitation_flower_big_4">
                                    <Flower />
                                </div>
                            </>
                        )
                    }
                </div>
            </PageTransition>
        </>
    );
};
