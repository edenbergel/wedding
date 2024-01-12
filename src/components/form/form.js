import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import apiService from '../../services/apiService';
import { PageTransition } from '../animations/pageTransition';
import { Button } from '../button/button';
import { Header } from '../header/header';
import { Input } from '../input/input';
import { Title } from '../title/title';
import { Toast } from '../toast/toast';
import { useTranslation } from 'react-i18next';
import './form.scss';

export const Form = () => {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [isYesSelected, setIsYesSelected] = useState(false); // default to 'Yes'
    const [quantity, setQuantity] = useState(null);
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };
    
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleRadioChange = (e) => {
        setIsYesSelected(e.target.value === 'yes');
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || (isYesSelected && !(quantity)?.toString().trim())) {
            setError(t('error'));
            return;
        }
        if (isYesSelected && Number(quantity) <= 0) return setError(t('rsvpErrorQty'));

        apiService.post({
            firstName,
            lastName,
            presence: isYesSelected,
            quantity: Number(quantity)
        })
        .then(response => {
            console.log('Response:', response.data);
            setLastName('');
            setFirstName('');
            setIsYesSelected(true);
            setQuantity(0);
            navigate('/form-success')
        })
        .catch(error => {
            console.error('Error:', error.response);
        });
    };

    return (
        <>
            <Header />
            <PageTransition>
                <main className='form_container'>
                    <form onSubmit={handleSubmit}>
                        <div className='form_title'>
                            <Title title={t('rsvpNavItem')} />
                        </div>

                        <Input 
                            placeholder={t('formFirstName')} 
                            value={firstName} 
                            onChange={handleFirstNameChange} 
                            style={{marginBottom: '50px'}}
                            hasError={!!error}
                        />
                        <Input 
                            placeholder={t('formLastName')} 
                            value={lastName} 
                            onChange={handleLastNameChange} 
                            style={{marginBottom: '50px'}}
                            hasError={!!error}
                        />

                        <div className='form_wrapper_radio'>
                            <span className='form_item_span form_item_radio'>
                                {t('formPresenceQuestion')}
                            </span>
                            <label className='form_item_radio'>
                                <input
                                    type="radio"
                                    value={'yes'}
                                    checked={isYesSelected}
                                    onChange={handleRadioChange}
                                />
                                {t('formPresenceYes')}
                            </label>
                            <label className='form_item_radio'>
                                <input
                                    type="radio"
                                    value={'no'}
                                    checked={!isYesSelected}
                                    onChange={handleRadioChange}
                                />
                                {t('formPresenceNo')}
                            </label>
                        </div>

                        {
                            isYesSelected && (
                                <div className='form_wrapper_number'>
                                    <span className='form_item_span'>
                                        {t('formQtyQuestion')}
                                    </span>
                                    <Input 
                                        placeholder={'0'} 
                                        value={quantity || ''} 
                                        onChange={handleQuantityChange} 
                                        type={'number'}
                                        style={{ marginBottom: '35px' }}
                                        hasError={!!error}
                                    />
                                </div>
                            )
                        }
                        
                        <Button type="submit" text={t('formSendButton')} />
                        {error && <Toast error={error} setError={setError} />}
                    </form>
                </main>
            </PageTransition>
        </>
    )
}
