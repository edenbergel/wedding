import React, { useEffect, useState } from 'react';
import apiService from '../../services/apiService';
import { Button } from '../button/button';
import { Input } from '../input/input';
import { Title } from '../title/title';
import { useNavigate } from "react-router-dom";
import { Toast } from '../toast/toast';
import { useTranslation } from 'react-i18next';
import './login.scss';
import { LanguagePicker } from '../languagePicker/languagePicker';
import { useMediaQuery } from 'react-responsive';

export const Login = () => {
    const { t, i18n } = useTranslation();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const language = i18n.language;
    const [height, setHeight] = useState('100vh');
    const isMobile = useMediaQuery({ maxWidth: 1023 });

    const checkPasswordValidity = async (e) => {
        e.preventDefault();
        
        try {
            const responseFR = await apiService.passwordGetFR();
            const responseHE = await apiService.passwordGetHE();
            const passwordFR = responseFR.data.data.attributes.password;
            const passwordHE = responseHE.data.data.attributes.password;

            if (
                (passwordFR === enteredPassword.replace(/\s/g, '')) || 
                (passwordHE === enteredPassword.replace(/\s/g, ''))
            ) {
                // Password is valid
                setError('')
                navigate('/landing');
            } else {
                // Password is not found in the collection
                setError(t('passwordError'))
            }
        } catch (error) {
            console.error('Error checking password:', error);
        }
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        if (isMobile) {
            setHeight(window.innerHeight + 'px');  
        }

        return () => {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }
    }, [isMobile])

    return (
        <div 
            className={`login ${language === 'he-IL' && 'login-he'}`}  
            style={{ height }}
        >
            <Title title={t('passwordTitle')} />
            <h4 className='login_subtitle'>{t('passwordSubtitle')}</h4>
            <form className='login_form'>
                <Input 
                    placeholder={t('passwordPlaceholder')} 
                    value={enteredPassword} 
                    onChange={(e) => setEnteredPassword(e.target.value.toLowerCase())}
                    hasError={!!error}
                    className={'login_input'}
                    onKeyPress={e => e.key === 'Enter' ? checkPasswordValidity(e) : {}}
                />
                <Button text={t('passwordEnter')} onClick={checkPasswordValidity} />

                {error && (
                    <Toast error={error} setError={setError}/>
                )}
            </form>
            <LanguagePicker />
        </div>
    );
};

