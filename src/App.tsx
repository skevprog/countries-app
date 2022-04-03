import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Home from './pages/Home';
import Search from './pages/Search';
import './App.css';

const client = new ApolloClient({ uri: 'https://countries.trevorblades.com/', cache: new InMemoryCache() });

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
