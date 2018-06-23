import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCdddqHIC2h0pAYUdDW3zNkf5fzP82vZ_8",
    authDomain: "architect-tikko.firebaseapp.com",
    databaseURL: "https://architect-tikko.firebaseio.com",
    projectId: "architect-tikko",
    storageBucket: "architect-tikko.appspot.com",
    messagingSenderId: "142196939827"
  };
  firebase.initializeApp(config);

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById('root'));
registerServiceWorker();