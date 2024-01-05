import React from 'react'
import { PageTransition } from '../animations/pageTransition';
import { Header } from '../header/header'
import { Title } from '../title/title'
import './formSuccess.scss';

export const FormSuccess = () => {
    return (
        <>
            <Header />
            <PageTransition>
                <div className='form_success'>
                    <Title title={'Thanks for your answer'} size={40} />
                    <p>With love</p>
                </div>
            </PageTransition>
        </>
    )
}
