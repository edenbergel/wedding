import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import './toast.scss';

export const Toast = ({ error, setError }) => {
    const [showToast, setShowToast] = useState(false);
    const { i18n } = useTranslation()

    const language = i18n.language;

    useEffect(() => {
        setShowToast(error);

        const toast = setTimeout(() => {
            setShowToast(false);
            setError('');
        }, 3000)

        return () => clearTimeout(toast);
    }, [error, setError])

    return (
        <div className={`error ${showToast && 'isActive'} ${language === 'he-IL' && 'error-he'}`}>
            <p className="error_msg">{error}</p>
            <div className='error_cross' onClick={() => setShowToast(false)}/>
        </div>
    );
};
