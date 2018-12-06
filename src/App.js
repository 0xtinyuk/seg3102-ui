import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import UserProfile from './components/userprofile'
import SignIn from './components/SignIn'
import Property from './components/property'
import Rental from './components/rental'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route path='/signin' component={SignIn} />
          <Route path='/userprofile' component={UserProfile} />
          <Route path='/property' component={Property} />
          <Route path='/images' component={UserProfile} />
          <Route path='/view' component={UserProfile} />
          <Route path='/rental' component={Rental} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
