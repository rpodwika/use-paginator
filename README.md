# use-paginator

A simple hook to paginate any dataset in JavaScript

![Codecov](https://img.shields.io/codecov/c/github/rpodwika/use-paginator)
[![GitHub issues](https://img.shields.io/github/issues/rpodwika/use-paginator)](https://github.com/rpodwika/use-paginator/issues)
[![GitHub forks](https://img.shields.io/github/forks/rpodwika/use-paginator)](https://github.com/rpodwika/use-paginator/network)
[![GitHub stars](https://img.shields.io/github/stars/rpodwika/use-paginator)](https://github.com/rpodwika/use-paginator/stargazers)
[![GitHub license](https://img.shields.io/github/license/rpodwika/use-paginator)](https://github.com/rpodwika/use-paginator/blob/master/LICENSE)

## Usage 

```
const data = [
  { id: 1, anything: 'a'},
  { id: 2, anything: 'b'},
  { id: 3, anything: 'c'},
  { id: 4, anything: 'd'},
  { id: 5, anything: 'e'}
]

const pageSize = 2

const Component = () => {
  const {
      currentPage, // contains current page number
      setCurrentPage, // sets a page (for example when someone clicks on a button with page number)
      pageItems, // page items to display
      totalPages, // total number of pages
      nextPage, // function to move to the next page
      prevPage  // function to move to the previous page
    } = usePaginator(data, pageSize)
  
  return (
     <>
        {pageItems.map(pi => <div id={`paged-element-${pi.id}`}>{pi.anything}</div>)}
        <div onClick={nextPage}>go to the next page</div>
        <div onClick={prevPage}>go to the previous page</div>
        <div>{currentPage}/{totalPages}</div>
     </>
  ) 
}
```
