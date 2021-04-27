import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useDebounce from '../helpers/hooks/useDebounce';
import { searchCharacterAsync, fetchCharactersAsync } from "../store/actions/charactersAction";

export default function Navbar () {
  const [search, setSearch] = useState('')
  const handleSearchTerms = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }
  const debounce = useDebounce(search, 500)
  const dispatch = useDispatch()

  useEffect(() => {
    if (debounce) {
      dispatch(searchCharacterAsync(search))
    } else {
      dispatch(fetchCharactersAsync())
    }
  }, [debounce])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand medium-text" href="#">Rick & Morty Wiki</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/favorites" className="nav-link small-text mx-2" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-heart mx-2" style={{color: "red"}} viewBox="0 0 16 16">
                    <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                  </svg>
                  Liked Characters
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input onChange={event => handleSearchTerms(event)} className="form-control me-2 small-text" type="search" placeholder="Search Character" aria-label="Search" />
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}