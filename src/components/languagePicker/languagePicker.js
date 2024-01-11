import React from 'react'
import { useTranslation } from 'react-i18next';
import './languagePicker.scss';

export const LanguagePicker = () => {
    const { t, i18n } = useTranslation();
    const language = i18n.language;
    const locale = language.slice(0, 2);

    const changeLanguage = (newLanguage) => {
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div className={`language_picker ${locale ? 'language_picker-he' : ''}`}>
            <div onClick={() => changeLanguage('he')}><span>{t('hebrew')}</span></div>
            <div onClick={() => changeLanguage('fr')}><span>{t('french')}</span></div>
        </div>
    )
}
