import React from 'react'
import { PageTransition } from '../animations/pageTransition';
import { Header } from '../header/header'
import { Title } from '../title/title'
import { useTranslation } from 'react-i18next';
import './formSuccess.scss';

export const FormSuccess = () => {
    const { t } = useTranslation();

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
