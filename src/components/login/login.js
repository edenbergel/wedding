import React, { useState } from 'react';
import apiService from '../../services/apiService';
import { Button } from '../button/button';
import { Input } from '../input/input';
import { Title } from '../title/title';
import './login.scss';
import { useNavigate } from "react-router-dom";
import { Toast } from '../toast/toast';

export const Login = () => {
    const [enteredPassword, setEnteredPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const checkPasswordValidity = async () => {
        try {
            const response = await apiService.get();
            const passwords = response.data.data.attributes.password;

            if (passwords === enteredPassword) {
                // Password is valid
                setError('')
                navigate('/landing');
            } else {
                // Password is not found in the collection
                setError('Password is not valid')
            }
        } catch (error) {
            console.error('Error checking password:', error);
        }
    };

    return (
        <div className='login'>
            <Title title={'Reserved space'} />
            <h4 className='login_subtitle'>Please enter the password</h4>
            <form className='login_form'>
                <Input 
                    placeholder={'Password'} 
                    value={enteredPassword} 
                    onChange={(e) => setEnteredPassword(e.target.value)}
                    hasError={!!error}
                    className={'login_input'}
                />
            </form>
            <Button text={'enter'} onClick={checkPasswordValidity} />
            {error && (
                <Toast error={error} setError={setError}/>
            )}
        </div>
    );
};

