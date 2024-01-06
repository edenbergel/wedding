import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Slide } from '../animations/slide';
import { Button } from '../button/button';
import './events.scss';

const Event = ({ event, index, next, current, t }) => {
    const navigate = useNavigate();
    const isLast = index === 2 && index === current;

    return (
        <Slide isVisible={index === current} className={`event_${index}`}>
            <div className={'event_wrapper'}>
                <div className='event_img' style={{ backgroundImage: `url(${event.src})` }} />
                <p className='event_date'>{event.date}</p>
                <h2 className='event_name'>{event.name}</h2>
                <Button
                    className={'event_btn'}
                    text={isLast ? t('invitationButton') : t('nextButton')} 
                    onClick={() => isLast ? navigate('/invitation') : next()}
                />
            </div>
        </Slide>
    )
};

export default Event;