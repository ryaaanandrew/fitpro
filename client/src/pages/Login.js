import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email, password)

        const requestBody = {
            query: `
                
            `
        }
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
