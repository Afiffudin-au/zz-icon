import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/serach-packs'></Route>
          <Route path='/search-icons'></Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
