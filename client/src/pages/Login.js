import React, { useState } from 'react';

const Login = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async  e => {
        e.preventDefault();

        const requestBody = {
            query: `
                query L{
                    login(email: "${email}" password: "${password}") {
                        userId
                        token
                        tokenExpiration
                    }
                }
            `,
        }

        const res = await fetch('http://localhost:4000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if(res.status !== 200 && res.status !== 201) {
            throw new Error('Authentication failed');
        };
    
        const resData = await res.json();
        console.log(resData.data.login);
        // need to set up context and pass data off 
        localStorage.setItem('token', resData.data.login.token);
        props.history.push('/dashboard');
        console.log(localStorage)
    };
    
    return (
        <div className="login">
            <div className="login__header"><span>log in</span></div>
            <div className="login__content">
                <form onSubmit={e => handleSubmit(e)} className="login__form">
                    <div className="login__control">
                        <label htmlFor="email">email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="login__control">
                        <label htmlFor="password">password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="login__actions">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login;
