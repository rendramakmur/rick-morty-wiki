import Swal from 'sweetalert2'

export function addFavorite (payload) {
  return { type: 'favorites/addFavorite', payload }
}

export function addFavoriteAsync (id) {
  return (dispatch, getState) => {
    const { favorites } = getState().favoritesReducer

    console.log(favorites);
    let flag = false;
    favorites.forEach(favorite => {
      if (favorite.id === id) {
        flag = true
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          icon: 'error',
          title: `${favorite.name} already on your favorites list`
        })
      }
    })
    if (!flag) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
        .then(data => {
          dispatch(addFavorite(data))
          Swal.fire({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            icon: 'success',
            title: `${data.name} added on your favorite list!`
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}

export function removeFavorite (payload) {
  return { type: 'favorites/removeFavorite', payload }
}

export function removeFavoriteAsync (id) {
  return (dispatch, getState) => {
    const { favorites } = getState().favoritesReducer

    favorites.forEach((favorite, i) => {
      if (favorite.id === id) {
        dispatch(removeFavorite(i))
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          icon: 'success',
          title: `So sad ${favorite.name} removed from your favorite list :(`
        })
      }
    })
  }
}