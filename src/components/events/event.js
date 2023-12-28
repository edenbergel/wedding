import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Slide } from '../animations/slide';
import { Button } from '../button/button';
import { Title } from '../title/title';
import './events.scss';

const Event = ({ event, index, next, current }) => {
    const navigate = useNavigate();
    // const [current, setCurrent] = useState(0);
    // const goTo = (index = 0) => {
    //     const total = 3;
    //     index = ((index % total) + total) % total;
    //     setCurrent(index);
    // }

	// const next = () => {
	// 	goTo(current + 1);
	// };
    const isLast = current === 2;
    console.log({isLast})
    return (
        <Slide isVisible={index === current}>
            <div className={'event_wrapper'}>
                <Title title={<>{'JEREMIE'} <br/> {'& HODAYA'}</>} />
                <div className='event_img' style={{ backgroundImage: `url(${event.src})` }} />
                <p className='event_date'>{event.date}</p>
                <h2 className='event_name'>{event.name}</h2>
                <Button 
                    text={isLast ? 'Invitation' : 'next'} 
                    onClick={() => isLast ? navigate('/form') : next()}
                />
            </div>
        </Slide>
    )
};

export default Event;