import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './components/Home/home.js'
import Header from './components/Header/header.js'
import Games from './components/Games/games.js'
import Leaderboard from './components/Leaderboard/leaderboard.js'
import About from './components/About/about.js'
import Nav from './components/Nav/nav.js'
import Footer from './components/Footer/footer.js'
import './App.scss';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
    }
  }

  render() {

    return (
      <Router>
        <div>
          <Header/>
          <Nav/>
            <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route exact path="/games">
                  <Games/>
                </Route>
                <Route exact path="/leaderboard">
                  <Leaderboard/>
                </Route>
                <Route exact path="/about">
                  <About/>
                </Route>
            </Switch>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;