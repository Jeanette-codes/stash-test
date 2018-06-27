import React from 'react';
import './App.css';
import Search from './components/search';
import Results from './components/results';
import Favorites from './components/favorites';

export const App = props => (
  <div className="app">
    <h1>Gyph Search!!!</h1>
    <Search />
    <Favorites />
    <Results />
  </div>
);
