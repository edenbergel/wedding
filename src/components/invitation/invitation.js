import React from "react";
import { useNavigate } from "react-router-dom";
import { FadeIn } from "../animations/fadeIn";
import { Button } from "../button/button";
import { Header } from "../header/header";
import { Title } from "../title/title";
import { CurvedTitle } from "../../svgs";
import "./invitation.scss";

export const Invitation = () => {
    const navigate = useNavigate();

    return (
        <>
        <Header />
        <FadeIn>
            <div className="invitation">
                <CurvedTitle />
                <Title title={'Jéremie & Hodaya'} size={24} />
                <div className='invitation_content'>
                    <p>
                        <span className='invitation_preposition'>on</span>
                        {' '}
                        <span className='invitation_date'>Tuesday</span>
                    </p>
                    <p className='invitation_day'>
                        <span className='invitation_number'>9</span>
                        <span className='invitation_preposition'>th</span>
                    </p>
                    <p>
                        <span className='invitation_date'>April</span>
                        {' '}
                        <span className='invitation_number'>2024</span>
                    </p>
                    <p>
                        <span className='invitation_preposition'>at</span>
                        {' '}
                        <span className='invitation_number'>17</span>
                        <span className='invitation_preposition'>h</span>
                        <span className='invitation_number'>00</span>
                    </p>
                </div>
                <h4 className='invitation_subtitle'>Destination of love</h4>
                <h6 className='invitation_address'>HaGiva, Givat Brenner, Israël</h6>
                <p className='invitation_note'>Please confirm your presence</p>
                <Button text={'RSVP'} onClick={() => navigate('/rsvp')} />
            </div>
        </FadeIn>
        </>
    );
};
