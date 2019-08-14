import React, { useState } from 'react';

const SignUp = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if( email.trim().length === 0 || 
            password.trim().length === 0 || 
            firstName.trim().length === 0 || 
            lastName.trim().length === 0) {
            return;
        }

        const requestBody = {
            query: `
                mutation {
                    createUser(userInput: { email: "${email}", password: "${password}", firstName: "${firstName}", lastName: "${lastName}" }) {
                        _id
                        email
                        password
                        firstName
                        lastName
                    }
                }
            `
        };
        fetch('http://localhost:4000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        props.history.push('/');
    };

    return (
        <div className="signUp">
            <div className="signUp__header">sign up</div>

            <div className="signUp__content">
                <form className="signUp__form" onSubmit={e => handleSubmit(e)}>
                    <div className="signUp__control">
                        <label htmlFor="email">email</label>
                        <input id='email' type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="signUp__control">
                        <label htmlFor="password">password</label>
                        <input id='password' type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="signUp__control">
                        <label htmlFor="firstName">first name</label>
                        <input id='firstName' type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </div>
                    <div className="signUp__control">
                        <label htmlFor="lastName">lastName</label>
                        <input id='lastName' type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                    </div>
                    
                    <div className="signUp__actions">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
