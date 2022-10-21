import React from 'react';
import '../App.css';
import TeaControl from './TeaControl'
import Header from './Header';
import Footer from './Footer';


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
