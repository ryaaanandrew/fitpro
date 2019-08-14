import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="navigation__left">
                <div className="navigation__logo"><NavLink to='/'>fitpro</NavLink></div>
            </div>
            <nav className="navigation__right">
                <ul>
                    <li><div className="navigation__links"><NavLink to='/signup'>sign up</NavLink></div></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
