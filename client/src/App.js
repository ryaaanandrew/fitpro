import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import SignUp from './pages/SignUp';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path='/signup' component={SignUp}/>
            </Switch>
        </BrowserRouter>
    )
};

export default App;
