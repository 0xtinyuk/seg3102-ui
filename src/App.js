import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route path='/SignIn' component={About} />
          <Route path='/UserProfile' component={Contact} />
          <Route path='/Property' component={Contact} />
          <Route path='/Images' component={Contact} />
          <Route path='/View' component={Contact} />
          <Route path='/Rental' component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
