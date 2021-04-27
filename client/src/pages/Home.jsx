import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../components/Loading'
import CharCard from '../components/CharCard'
import Pagination from '../components/Pagination'
import useTotalPages from '../helpers/hooks/useTotalPages'
import usePageTitle from '../helpers/hooks/usePageTitle'
import { fetchCharactersAsync, fetchPageAsync } from '../store/actions/charactersAction'

export default function Home () {
  const isLoading = useSelector(state => state.charactersReducer.isLoading)
  const pages = useSelector(state => state.charactersReducer.pages)
  const characters = useSelector(state => state.charactersReducer.characters)
  const isSearching = useSelector(state => state.searchingReducer.isSearching)
  const dispatch = useDispatch()

  usePageTitle('Rick & Morty Characters Wiki')

  const { totalPages } = useTotalPages(pages)

  useEffect(() => {
    dispatch(fetchCharactersAsync())
  }, [dispatch])

  const fetchPage = (e, id) => {
    e.preventDefault()
    dispatch(fetchPageAsync(id))
  }

  return (
    <main>
      <div id="characters-container">
        <h1 className="text-center mt-3">Characters Deck</h1>
        <div className="container-fluid mb-5" style={{height: "100vh"}}>
          <div className="row mt-4 d-flex justify-content-around">
            {
              isLoading ?
              <Loading></Loading>
              :
              characters.map(character => {
                return <CharCard character={character} key={character.id}></CharCard>
              })
            }
          </div>
          <div className="d-flex justify-content-center mt-3">
            <nav aria-label="Page navigation example" className="table-responsive my-2 mx-4">
              <ul className="pagination">
                {
                  isSearching ?
                  <>
                  </>
                  :
                  totalPages.map(page => {
                    return <Pagination page={page} key={page} fetchPage={fetchPage}></Pagination>
                  })
                }
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </main>
  )
}