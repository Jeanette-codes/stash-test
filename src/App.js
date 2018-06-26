import React from 'react';
import './App.css';
import {Timeline} from './components/Timeline';

export const App = (props) =>  (
  <div className="app">
      <div className="app-container">
        {/* <img src={betterLogo} className="better-logo" alt="logo" />
        <i className="material-icons">face</i> */}
        <Timeline />
      </div>
    </div>
  );