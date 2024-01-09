import React, { useEffect } from 'react'
import { PageTransition } from '../animations/pageTransition';
import { Header } from '../header/header'
import { Title } from '../title/title'
import { useTranslation } from 'react-i18next';
import './formSuccess.scss';

export const FormSuccess = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }
    }, [])

    return (
        <>
            <Header />
            <PageTransition>
                <div className='form_success'>
                    <Title title={t('formSuccessTitle')} className={'form_success_title'} />
                    <p className='form_success_subtitle'>{t('formSuccessSubTitle')}</p>
                    <p>{t('formSuccessNote')}</p>
                </div>
            </PageTransition>
        </>
    )
}
