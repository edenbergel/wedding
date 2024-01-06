import "./app.scss";
import Routing from "./router";
import { LanguagePicker } from './components'

const App = () => {
    return (
        <>
            <LanguagePicker />
            <Routing />
        </>
    );
};

export default App;
