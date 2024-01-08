import React, { useState } from 'react';
import apiService from '../../services/apiService';
import { Button } from '../button/button';
import { Input } from '../input/input';
import { Title } from '../title/title';
import { useNavigate } from "react-router-dom";
import { Toast } from '../toast/toast';
import { useTranslation } from 'react-i18next';
import './login.scss';
import { LanguagePicker } from '../languagePicker/languagePicker';

export const Login = () => {
    const { t, i18n } = useTranslation();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const language = i18n.language;

    const checkPasswordValidity = async (e) => {
        e.preventDefault();
        
        try {
            const response = await apiService.get();
            const passwords = response.data.data.attributes.password;

            if (passwords === enteredPassword) {
                // Password is valid
                setError('')
                navigate('/landing');
            } else {
                console.log('ici je rpasse')
                // Password is not found in the collection
                setError(t('passwordError'))
            }
        } catch (error) {
            console.error('Error checking password:', error);
        }
    };

    return (
        <div className={`login ${language === 'he-IL' && 'login-he'}`}>
            <LanguagePicker />

            <Title title={t('passwordTitle')} />
            <h4 className='login_subtitle'>{t('passwordSubtitle')}</h4>
            <form className='login_form'>
                <Input 
                    placeholder={t('passwordPlaceholder')} 
                    value={enteredPassword} 
                    onChange={(e) => setEnteredPassword(e.target.value)}
                    hasError={!!error}
                    className={'login_input'}
                    onKeyPress={e => e.key === 'Enter' ? checkPasswordValidity(e) : {}}
                />
            </form>
            <Button text={t('passwordEnter')} onClick={checkPasswordValidity} />
            {error && (
                <Toast error={error} setError={setError}/>
            )}
        </div>
    );
};

