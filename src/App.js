import { useEffect } from "react";
import "./app.scss";
import Routing from "./router";
import { useTranslation } from 'react-i18next';

const App = () => {
    const { i18n } = useTranslation();
    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            i18n.changeLanguage(storedLanguage);
        }
    }, [i18n]);

    return (
        <Routing />
    );
};

export default App;
