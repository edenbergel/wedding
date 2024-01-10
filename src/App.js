import "./app.scss";
import Routing from "./router";
import { useTranslation } from 'react-i18next';

const App = () => {
    const { t } = useTranslation();

    document.title = t('dudeName') + ' ' + t('and') + ' ' + t('queenName');

    return (
        <Routing />
    );
};

export default App;
