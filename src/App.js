import React from 'react';
import './App.css';
import { MainPage } from './components/MainPage/MainPage';
import { Switch, Route } from 'react-router-dom';
import { InfoPage } from './components/InfoPage/InfoPage';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className='page-container'>
      <div className='content'>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/infopage/:id' component={InfoPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
