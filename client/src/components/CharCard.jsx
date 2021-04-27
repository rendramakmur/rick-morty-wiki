import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addFavoriteAsync, removeFavoriteAsync } from '../store/actions/favoritesAction'

export default function CharCard (props) {
  const { character } = props
  const { path } = useRouteMatch()
  const dispatch = useDispatch()

  const handleLikedChar = (e, id) => {
    e.preventDefault()
    dispatch(addFavoriteAsync(id))
  }

  const handleDislikedChar = (e, id) => {
    e.preventDefault()
    dispatch(removeFavoriteAsync(id))
  }

  return (
    <div className="card shadow my-2" style={{width: "15rem"}}>
      <div className="card-body">
        <img src={character.image} className="card-img-top my-2 rounded float-start shadow-sm" alt="" />
        <p className="card-title text-center">{character.name}</p>
        <div className="d-flex justify-content-center">
          {
            path === '/favorites' ?
            <button onClick={(event) => handleDislikedChar(event, character.id)} className="small-btn shadow mx-1">Dislike</button>
            :
            <button onClick={(event) => handleLikedChar(event, character.id)} className="small-btn shadow mx-1">Like</button>
          }
          <Link to={`character/${character.id}`} className="small-btn shadow mx-1">Detail</Link>
        </div>
      </div>
    </div>
  )
  
}