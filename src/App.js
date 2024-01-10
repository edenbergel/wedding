import { useEffect } from "react";
import "./app.scss";
import Routing from "./router";
import { useTranslation } from 'react-i18next';

const App = () => {
    const { t, i18n } = useTranslation();
    useEffect(() => {
        if (i18n.language !== 'fr-FR' || i18n.language !== 'he-IL') {
            localStorage.setItem('language', 'fr-FR');
        }
        
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            i18n.changeLanguage(storedLanguage);
        }
    }, [i18n]);

    document.title = t('dudeName') + ' ' + t('and') + ' ' + t('queenName');

    return (
        <Routing />
    );
};

export default App;
