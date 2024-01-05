import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import apiService from '../../services/apiService';
import { PageTransition } from '../animations/pageTransition';
import { Button } from '../button/button';
import { Header } from '../header/header';
import { Input } from '../input/input';
import { Title } from '../title/title';
import { Toast } from '../toast/toast';
import './form.scss';

export const Form = () => {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [isYesSelected, setIsYesSelected] = useState(true); // default to 'Yes'
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState('')
    const navigate = useNavigate();

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

        if (!firstName || !lastName || !quantity.toString().trim()) {
            setError('Please fill in all required fields');
            return;
        }

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
                            <Title title={'RSVP'} />
                        </div>

                        <Input 
                            placeholder={'First Name'} 
                            value={firstName} 
                            onChange={handleFirstNameChange} 
                            style={{marginBottom: '50px'}}
                            hasError={!!error}
                        />
                        <Input 
                            placeholder={'Last Name'} 
                            value={lastName} 
                            onChange={handleLastNameChange} 
                            style={{marginBottom: '50px'}}
                            hasError={!!error}
                        />

                        <div className='form_wrapper_radio'>
                            <span className='form_item_span form_item_radio'>Can we count on your presence ?</span>
                            <label className='form_item_radio'>
                                <input
                                    type="radio"
                                    value="yes"
                                    checked={isYesSelected}
                                    onChange={handleRadioChange}
                                />
                                Yes
                            </label>
                            <label className='form_item_radio'>
                                <input
                                    type="radio"
                                    value="no"
                                    checked={!isYesSelected}
                                    onChange={handleRadioChange}
                                />
                                No
                            </label>
                        </div>

                        <div className='form_wrapper_number'>
                            <span className='form_item_span'>How much are you ?</span>
                            <Input 
                                placeholder={'0'} 
                                value={quantity} 
                                onChange={handleQuantityChange} 
                                type={'number'}
                                style={{ marginBottom: '35px' }}
                                hasError={!!error}
                            />
                        </div>
                        <Button type="submit" text={'send'} />
                        {error && <Toast error={error} setError={setError} />}
                    </form>
                </main>
            </PageTransition>
        </>
    )
}
