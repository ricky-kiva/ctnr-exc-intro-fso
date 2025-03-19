import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState('');

    useEffect(() => {
        fetch(import.meta.env.VITE_BACKEND_URL)
            .then(response => response.json())
            .then(data => setMessage(data.message));
    }, []);

    return <h1>{message}</h1>;
}

export default App
