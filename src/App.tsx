import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useGetAccessToken } from './custom-hooks/useGetAccessToken/useGetAccessToken'
import Home from './components/Home/Home'
import SearchIcon from './components/SearchIcon/SearchIcon'
import SearchPack from './components/SearchPack/SearchPack'
import IconPage from './components/secondPage/IconPage/IconPage'
import PackPage from './components/secondPage/PackPage/PackPage'
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
          <Route path='/ui-icons'>
            <IconPage />
          </Route>
          <Route path='/packs'>
            <PackPage />
          </Route>
          <Route path='/search-packs'>
            <SearchPack />
          </Route>
          <Route path='/search-icons'>
            <SearchIcon />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
