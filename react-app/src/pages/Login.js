import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase/compat/app';

export const Login = ({history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
    e.preventDefault();
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            history.push('/');
        })
        .catch(err => {
            console.log(err);
        });
    };
    return (
        <>
            <h1>Login</h1>        
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        placeholder='Email'
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input 
                        type='password' 
                        id='password' 
                        name='password'
                        placeholder='password'
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
            <Link to="/signup">sign up</Link>
        </>
    )
}

export default Login