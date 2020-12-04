import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router ,Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
        <div className="wrapper-fit">
        <Navbar />
        <Switch>
          <Route path="/"  exact component={Home}/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/aboutUs"  component={AboutUs}/>
          <Route path="/contacts"  component={Contacts}/>
        </Switch>
        <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
