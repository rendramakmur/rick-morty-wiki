const initialState = {
  favorites: []
}

export default function reducer (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case 'favorites/addFavorite':
      return {...state, favorites: [...state.favorites, payload]}
    case 'favorites/removeFavorite':
      return {...state, favorites: [].concat(state.favorites.slice(0, payload), state.favorites.slice(payload + 1)) }
    default:
      return state
  }
}