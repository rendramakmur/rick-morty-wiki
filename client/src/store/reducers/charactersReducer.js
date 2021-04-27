const initialState = {
  characters: [],
  character: {},
  isLoading: false,
  pages: 0
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case 'characters/fetchCharacters':
      return { ...state, characters: payload }
    case 'character/getCharacterDetail':
      return { ...state, character: payload }
    case 'isLoading/setIsLoading':
      return { ...state, isLoading: payload }
    case 'pages/fetchPages':
      return { ...state, pages: payload }
    default:
      return state
  }
}