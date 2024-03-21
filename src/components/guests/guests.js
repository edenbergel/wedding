import React, { useCallback, useEffect, useState } from 'react'
import apiService from '../../services/apiService';
import { Header } from '../header/header';
import { Input } from '../input/input';
import { useTranslation } from 'react-i18next';
import './guests.scss';

export const Guests = () => {
    const [guests, setGuests] = useState([]);
    const [totalGuest, setTotalGuests] = useState(0);
    const [filterText, setFilterText] = useState('');
    const { i18n } = useTranslation();
    const language = i18n.language;
    const locale = language.slice(0, 2);
    const validLocale = (locale === 'he' || locale === 'fr') ? locale : 'fr'
    
    const getAllGuests = useCallback(async () => {
        let allItems = [];
        let start = 0;
        const limit = 100;
    
        while (true) {
            const data = await apiService.guestsGet(start, limit);
            const items = data.data;
    
            allItems = [...allItems, ...items];
    
            if (items.length < limit) {
                break;
            }
    
            start += limit;
        }
        setGuests(allItems);
    }, []);

    const filteredGuests = guests?.filter(guest => {
        const { firstName, lastName, presence } = guest.attributes;

        const fullName = `${firstName} ${lastName}`.toLowerCase();
        const presenceText = presence ? 'oui' : 'non';

        return (
            fullName.includes(filterText.toLowerCase()) ||
            lastName.toLowerCase().includes(filterText.toLowerCase()) ||
            firstName.toLowerCase().includes(filterText.toLowerCase()) ||
            presenceText.toLowerCase().includes(filterText.toLowerCase())
        );
    }).sort((a, b) => {
        const sortedGuests = a.attributes.firstName.localeCompare(
            b.attributes.firstName,
            validLocale,
            { sensitivity: "base" }
        );

        return sortedGuests;
    });

    const computeTotalGuests = filteredGuests?.reduce((acc, guest) => {
        const { presence } = guest.attributes;

        if (presence === true) {
            acc += guest.attributes.quantity;
        }

        return acc;
    }, 0)

    useEffect(() => {
        getAllGuests();
        setTotalGuests(computeTotalGuests);
    }, [getAllGuests, computeTotalGuests])

    return (
        <>
            <Header />
            <div className='guests'>
                <div className='guests_search'>
                    <div>
                    <Input 
                        placeholder={'Chercher un invité'}
                        type={'search'} 
                        onChange={(e) => setFilterText(e.target.value)} 
                        className={'guests_search_input'} 
                    />
                    </div>
                </div>
                <div className='outer'>
                <table className="guests_table">
                    <thead>
                        <tr>
                            <th>Prénom</th>
                            <th>Nom</th>
                            <th>Présent</th>
                            <th>Nombre de personnes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredGuests?.map((guest, i) => {
                                const {
                                    firstName,
                                    lastName,
                                    presence,
                                    quantity
                                } = guest.attributes;

                                return (
                                    <tr key={guest.id}>
                                        <td>{firstName}</td>
                                        <td>{lastName}</td>
                                        <td>{presence ? 'oui' : 'non'}</td>
                                        <td>{quantity}</td>
                                    </tr>
                                )
                            }) 
                        }

                        <tr className='guests_total'>
                            <td>{'Total'}</td>
                            <td></td>
                            <td></td>
                            <td>{totalGuest}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </>
    )
}
