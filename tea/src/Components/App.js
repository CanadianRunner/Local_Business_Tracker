import React from 'react';
import './App.css';
import TeaControl from './'
import Header from './Header';


function App() {
  return (
    <React.Fragment>
        <Header/>
        <TeaControl />
        <Footer />
    </React.Fragment>
  );
}

export default App;
