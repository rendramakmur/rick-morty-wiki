const initialState = {
  isSearching: false
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case 'isSearching/setIsSearching':
      return {...state, isSearching: payload}
    default:
      return state
  }
}