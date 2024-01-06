import React from 'react'
import { useTranslation } from 'react-i18next';
import './languagePicker.scss';

export const LanguagePicker = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (newLanguage) => {
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div className="language_picker">
            <div onClick={() => changeLanguage('he-IL')}><span>{'HE'}</span></div>
            <div onClick={() => changeLanguage('fr-FR')}><span>{'FR'}</span></div>
        </div>
    )
}