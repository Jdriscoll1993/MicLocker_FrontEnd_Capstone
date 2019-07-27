import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MicLocker from './components/MicLocker';
import * as firebase from 'firebase/app'
import 'semantic-ui-css/semantic.min.css';

var firebaseConfig = {
  apiKey: "AIzaSyCzMqPpjqYEm6pyRst4voo-8Gma6IqnxjM",
  authDomain: "fecapstone-01.firebaseapp.com",
  databaseURL: "https://fecapstone-01.firebaseio.com",
  projectId: "fecapstone-01",
  storageBucket: "fecapstone-01.appspot.com",
  messagingSenderId: "361828284008",
  appId: "1:361828284008:web:b95746566c9fae78"
};
//Initialize Firebase. Creates an instance of Firebase.
firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <Router>
    <MicLocker />
  </Router>,
  document.getElementById('root')
);
