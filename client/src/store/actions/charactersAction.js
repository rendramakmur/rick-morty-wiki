import { setIsSearching } from './searchingAction';
import Swal from 'sweetalert2'

export function fetchCharacters (payload) {
  return { type: 'characters/fetchCharacters', payload }
}

export function fetchCharactersAsync() {
  return (dispatch) => {
    dispatch(setIsLoading(true))
    fetch(`https://rickandmortyapi.com/api/character/?page=${1}`)
      .then(res => res.json())
      .then(data => {
        dispatch(fetchCharacters(data.results))
        dispatch(fetchPages(data.info.pages))
        dispatch(setIsSearching(false))
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        dispatch(setIsLoading(false))
      })
  }
}

export function fetchPageAsync(id) {
  return (dispatch) => {
    dispatch(setIsLoading(true))
    fetch(`https://rickandmortyapi.com/api/character/?page=${id}`)
      .then(res => res.json())
      .then(data => {
        dispatch(fetchCharacters(data.results))
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        dispatch(setIsLoading(false))
      })
  }
}

export function getCharacterDetail (payload) {
  return { type: 'character/getCharacterDetail', payload }
}

export function getCharacterDetailAsync (id) {
  return (dispatch) => {
    dispatch(setIsLoading(true))
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => {
        dispatch(getCharacterDetail(data))
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        dispatch(setIsLoading(false))
      })
  }
}

export function setIsLoading(payload) {
  return { type: 'isLoading/setIsLoading', payload }
}

export function fetchPages(payload) {
  return { type: 'pages/fetchPages', payload }
}

export function searchCharacterAsync (search) {
  return (dispatch) => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then(res => res.json())
      .then(data => {
        if (data.results) {
          dispatch(fetchCharacters(data.results))
          dispatch(setIsSearching(true))
        } else {
          Swal.fire({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            icon: 'error',
            title: `Character is not found!`
          })
          dispatch(setIsSearching(false))
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}