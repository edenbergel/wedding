import React from 'react'
import { FadeIn } from '../animations/fadeIn'
import { Header } from '../header/header'
import { Title } from '../title/title'
import './formSuccess.scss';

export const FormSuccess = () => {
    return (
        <FadeIn>
            <Header />
            <div className='form_success'>
                <Title title={'Thanks for your answer'} size={40} />
                <p>With love</p>
            </div>
        </FadeIn>
    )
}
