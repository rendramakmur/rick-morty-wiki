import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function useDebounce (value, delay) {
  const [searchTerms, setSearchTerms] = useState(value)
  const history = useHistory()
  history.push("/")

  useEffect(() => {
    const handler = setTimeout (() => {
      setSearchTerms(value)
    }, delay)
    
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  
  return searchTerms
}
