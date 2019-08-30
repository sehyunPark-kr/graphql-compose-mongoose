import React from 'react';
//--------------------------
import { BrowserRouter as Router, Route } from 'react-router-dom';
//--------------------------
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from './apollo/ApolloClient';
//--------------------------
import Launches from './components/Launches';
import Launch from './components/Launch';
//--------------------------
import logo from './resources/icon/logo-small.png';
//--------------------------

function App() {
  return (
    <ApolloProvider client={ApolloClient}>
      <Router>
        <div className="conntainer">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 300, display: 'block', margin: 'auto' }}
          />
          <Route exact={true} path="/" component={Launches} />
          <Route
            exact={true}
            path="/launch/:flight_number"
            component={Launch}
          />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
