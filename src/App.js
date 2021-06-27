import React from 'react';
import './App.css';
import Login from './Login'
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <AmplifySignOut/>
      {/* <Login/> */}
    </div>
  );
}

export default withAuthenticator(App);
