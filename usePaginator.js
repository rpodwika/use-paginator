import { useState } from 'react'

/**
 * 
 * @param {array} itemsList 
 * @param {number} maxItemsPerPage 
 */
const usePaginator = (itemsList, maxItemsPerPage = 9) => {
  const [items, setItems] = useState(itemsList)
  const [currentPage, setCurrentPage] = useState(1)

  const isPaginating = items.length > maxItemsPerPage
  const totalPages = Math.ceil(items.length / maxItemsPerPage)

  const currentPageStart = ((currentPage - 1) * maxItemsPerPage)
  const currentPageEnd = currentPage * maxItemsPerPage;

  const pageItems = items.slice(currentPageStart, currentPageEnd > items.length ? undefined : currentPageEnd)

  const setItemList = (newItemsList) => {
    setCurrentPage(1)
    setItems(newItemsList)
  }

  const nextPage = () => {
    setCurrentPage(prevCurrPage => prevCurrPage < totalPages ? prevCurrPage + 1 : prevCurrPage)
  }

  const prevPage = () => {
    setCurrentPage(prevCurrPage => prevCurrPage > 1 ? prevCurrPage - 1 : prevCurrPage)
  }

  return {
    setItemList,
    isPaginating,
    currentPage,
    setCurrentPage,
    pageItems,
    totalPages,
    nextPage,
    prevPage
  }
}

export default usePaginator
