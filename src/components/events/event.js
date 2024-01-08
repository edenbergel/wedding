import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Slide } from '../animations/slide';
import { Button } from '../button/button';
import './events.scss';

const Event = ({ event, index, next, current, t, locale }) => {
    const navigate = useNavigate();
    const isLast = index === 2 && index === current;
    const videoRef = useRef(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.controls = false;
            videoRef.current.loop = true;
            videoRef.current.autoplay = true;
            videoRef.current.muted = true;
        }
    }, [videoRef]);

    useEffect(() => {
        // Check when the video is loaded
        const videoElement = videoRef?.current;

        videoElement.addEventListener('loadeddata', () => {
            setIsVideoLoaded(true);
        });

        // Clean up event listener on component unmount
        return () => {
            videoElement.removeEventListener('loadeddata', () => {});
        };
    }, []);

    return (
        <Slide 
            isVisible={index === current} 
            className={`event_${index} ${locale === 'he' && 'event_he'}`} 
        >
            <div className={'event_wrapper'}>
                <div className='event_img'>
                    <video
                        ref={videoRef}
                        controls
                        autoPlay
                        loop
                        playsInline
                        muted
                        className={`${!isVideoLoaded ? 'isNotVideoLoaded': ''}`}
                    >
                        <source src={event.src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <p className='event_date'>{event.date}</p>
                <h2 className='event_name'>{event.name}</h2>
                <Button
                    className={'event_btn'}
                    text={isLast ? t('invitationButton') : t('nextButton')} 
                    onClick={(e) => isLast ? navigate('/invitation') : next(e)}
                />
            </div>
        </Slide>
    )
};

export default Event;