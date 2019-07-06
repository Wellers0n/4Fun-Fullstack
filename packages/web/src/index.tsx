import './app.css'
import '@babel/polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<App />, root);