import { useState, useEffect } from 'react'

export default function usePageTitle (title) {
  const [pageTitle] = useState('')
  
  useEffect(() => {
    document.title = title;
  }, [title])

  return pageTitle
}