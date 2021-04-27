import React from 'react'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import CharDetails from './pages/CharDetails'
import FavoritesPage from './pages/FavoritesPage'

export default function App () {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/character/:id">
          <CharDetails />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
