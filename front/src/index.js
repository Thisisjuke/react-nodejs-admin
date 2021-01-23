import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/index.css';

ReactDOM.render(
    <React.StrictMode>
        <div className={'h-screen overflow-hidden bg-black'}>
            <App />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
