import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import SignUp from './pages/SignUp';
import Landing from './pages/Landing';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route path='/signup' component={SignUp}/>
            </Switch>
        </BrowserRouter>
    )
};

export default App;
