import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useGetAccessToken } from './custom-hooks/useGetAccessToken/useGetAccessToken'
import Home from './components/Home/Home'
function App() {
  const { getAccessToken } = useGetAccessToken()
  useEffect(() => {
    getAccessToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
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
