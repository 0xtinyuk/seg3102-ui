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
          <Route path='/signin' component={About} />
          <Route path='/userprofile' component={Contact} />
          <Route path='/property' component={Contact} />
          <Route path='/images' component={Contact} />
          <Route path='/view' component={Contact} />
          <Route path='/rental' component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
