import { useState, useEffect } from 'react';

export default function useTotalPages (pages) {
  const [totalPages, setTotalPages] = useState([])
  const numberOfPages = []

  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i)
  }
  
  useEffect(() => {
    setTotalPages(numberOfPages)
  }, [pages])
  
  return {
    totalPages
  }
}