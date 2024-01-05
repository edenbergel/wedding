import React from "react";
import { useNavigate } from "react-router-dom";
import { FadeIn } from "../animations/fadeIn";
import { Button } from "../button/button";
import { Header } from "../header/header";
import { Title } from "../title/title";
import "./invitation.scss";

export const Invitation = () => {
    const navigate = useNavigate();

    return (
        <>
        <Header />
        <FadeIn>
            <div className="invitation">
                <div className="invitation_wrapper">
                    <h4 className="invitation_title">YOU ARE INVITED TO CELEBRATE THE UNION OF</h4>
                    <Title title={'Jéremie & Hodaya'} />
                    <div className='invitation_content'>
                        <p className="invitation_p">
                            <span className='invitation_date'>
                                <span className='invitation_preposition'>on</span>
                                {' '}Tuesday{' '}
                                <span className='invitation_number'>9</span> 
                                {' '}April{' '}
                                <span className='invitation_number'>2024</span>
                            </span>
                        </p>
                        <p>
                            <span className='invitation_preposition'>at</span>
                            {' '}
                            <span className='invitation_number'>17</span>
                            <span className='invitation_preposition'>h</span>
                            <span className='invitation_number'>00</span>
                        </p>
                    </div>
                    <p className='invitation_subtitle invitation_p'><span>Destination of love</span></p>
                    <h6 className='invitation_address'>HaGiva, Givat Brenner, Israël</h6>
                    <p className='invitation_note'>Please confirm your presence</p>
                    <Button text={'RSVP'} onClick={() => navigate('/rsvp')} />
                </div>
            </div>
        </FadeIn>
        </>
    );
};
