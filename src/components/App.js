import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export default function App() {
    return (
        <BrowserRouter>
            <Styles />
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

const Styles = createGlobalStyle`
    ${reset}
`;
