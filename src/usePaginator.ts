import { useState } from 'react'
import PropTypes from 'prop-types'

type IUsePaginator = {
  setItemList: (newItemsList: any[]) => void,
  isPaginating: boolean,
  currentPage: number,
  setCurrentPage: (page: number) => void,
  pageItems: any[],
  totalPages: number,
  nextPage: () => void,
  prevPage: () => void
}

/**
 * Simple pagination with all the necessary information to build a robust and powerful paginator
 *
 * @param {any[]} itemsList a collection of items to be paged
 * @param maxItemsPerPage maximum items displayed per page
 *
 * @return {Object} object with information about the pagination
 *
 * @property {setItemList} sets the items to be paginated
 * @property {isPaginating} if true it means that the pagination is run there are more items than page size
 * @property {currentPage} the number reflecting the current page
 * @property {setCurrentPage} a function that can move to any page in the collection
 * @property {pageItems} items that are displayed on a current page
 * @property {totalPages} the number of total pages
 * @property {nextPage} a function when invoked move to the next page
 * @property {prevPage} a function when invoked move to the previous page
 */
export const usePaginator = (itemsList: any[], maxItemsPerPage: number = 9): IUsePaginator => {
  const [items, setItems] = useState<any[]>(itemsList)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const isPaginating: boolean = items.length > maxItemsPerPage
  const totalPages: number = Math.ceil(items.length / maxItemsPerPage)

  const currentPageStart: number = ((currentPage - 1) * maxItemsPerPage)
  const currentPageEnd: number = currentPage * maxItemsPerPage;

  const pageItems: any[] = items.slice(currentPageStart, currentPageEnd > items.length ? undefined : currentPageEnd)

  const setItemList = (newItemsList: any[]) => {
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

usePaginator.propTypes = {
  itemsList: PropTypes.array,
  maxItemsPerPage: PropTypes.number
}
