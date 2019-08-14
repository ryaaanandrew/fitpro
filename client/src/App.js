import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import SignUp from './pages/SignUp';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/login' component={Login}/>
                <Route path='/dashboard' component={Dashboard}/>
            </Switch>
        </BrowserRouter>
    )
};

export default App;
