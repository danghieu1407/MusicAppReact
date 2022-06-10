import React from 'react';
import { loginEndpoint } from '../../spotify';
import './login.css';
const Login = () => {
    return (
        <div className='login-page'>
            <img src='https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/276171192_1669298540082640_4746287806610913901_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=w_MS4-6rXrIAX_0yzXT&_nc_ht=scontent.fsgn5-15.fna&oh=00_AT_AtxAgT3RQ9bOBD4tPRWILEowkl-1oP9rHqs7pCLl-UQ&oe=62A5D7E7' alt='logo-spotify' className='logo'/>
            <a href={loginEndpoint}>
                <div className="login-btn">LOG IN</div>
            </a>
        </div>
    );
};

export default Login;