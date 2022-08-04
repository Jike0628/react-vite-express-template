import React, {useState, useEffect} from 'react';
import './App.css';
import logo from './Node-JS-01.svg';

function App() {
    const [message, setMessage] = useState('Nothing yet.');

    useEffect(() => {
        const getMessage = async () => {
            try {
                const response = await fetch('/api');
                const data = await response.json();
                setMessage(data.message);
            } catch (error) {
                console.log(error);
                setMessage('Error!');
            }
        }

        getMessage();
    }, [])

    return (
        <main>
            <p>React⚛️ + Vite⚡ + <img className="logo" src={logo} alt="logo"/><span className="express">express</span>
            </p>
            <p>The API sez&hellip; {message}</p>
        </main>
    );
}

export default App;
