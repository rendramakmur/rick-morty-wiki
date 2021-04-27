import React, { useEffect } from 'react';
import Loading from '../components/Loading';
import usePageTitle from '../helpers/hooks/usePageTitle';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacterDetailAsync } from '../store/actions/charactersAction';
import { addFavoriteAsync } from "../store/actions/favoritesAction";

export default function CharDetails () {
  const characterDetails = useSelector(state => state.charactersReducer.character)
  const isLoading = useSelector(state => state.charactersReducer.isLoading)
  const dispatch = useDispatch()

  usePageTitle(characterDetails.name)

  const { id } = useParams()

  useEffect(() => {
    dispatch(getCharacterDetailAsync(id))
  }, [dispatch, id])

  const handleLikedChar = (e, id) => {
    e.preventDefault()
    dispatch(addFavoriteAsync(id))
  }

  return (
    <div id="character-detail">
      {
        isLoading ?
        <Loading></Loading>
        :
        <div className="container-fluid mb-5 overflow-auto">
          <h1 className="text-center my-5">{characterDetails.name}</h1>
          <div className="row">
            <div className="col-sm-6">
              <div className="d-flex justify-content-center">
                <img src={characterDetails.image} className="img-fuild shadow" alt=""/>
              </div>
              <div className="d-flex justify-content-center">
                <button onClick={event => handleLikedChar(event, characterDetails.id)} className="small-btn shadow mx-1 my-3">Like</button>
              </div>
            </div>
            <div className="col-sm-5">
              <ul className="list-group list-group-flush">
                <li className="list-group-item bold">Name: <p>{characterDetails.name}</p></li>
                <li className="list-group-item bold">Status: <p>{characterDetails.status}</p></li>
                <li className="list-group-item bold">Species: <p>{characterDetails.species}</p></li>
                <li className="list-group-item bold">Gender: <p>{characterDetails.gender}</p></li>
                <li className="list-group-item bold">Origin: <p>{characterDetails?.origin?.name}</p></li>
                <Link to="/" className="medium-btn shadow mx-1 my-3 text-center">Back to Characters List</Link>
              </ul>
            </div>
          </div>
        </div>
      }
    </div>
  )
}