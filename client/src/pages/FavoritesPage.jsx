import React from 'react'
import CharCard from '../components/CharCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function FavoritePage () {
  const favorites = useSelector(state => state.favoritesReducer.favorites)

  return (
    <div id="characters-container">
      {
        favorites.length === 0 ?
        <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
          <div>
            <h6 className="text-center mx-3">You don't have any favorite character, add your favorite <Link to="/" style={{color: "#353535"}}>here!</Link></h6>
          </div>
        </div>
        :
        <div>
          <h1 className="text-center mt-3">Liked Characters</h1>
          <div className="container-fluid overflow-auto mb-5" style={{height: "100vh"}}>
            <div className="row mt-4 d-flex justify-content-around">
              {
                favorites.map(character => {
                  return <CharCard character={character} key={character.id}></CharCard>
                })
              }
              
            </div>
          </div>
        </div>
      }
    </div>
  )
}
