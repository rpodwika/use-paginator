# use-paginator

A simple hook to paginate any dataset in JavaScript

![Azure DevOps coverage](https://img.shields.io/azure-devops/coverage/rpodwika/use-paginator/2)

## Usage 

```
const data = [
  { id: 1, anything: 'a'},
  { id: 2, anything: 'b'},
  { id: 3, anything: 'c'},
  { id: 4, anything: 'd'}
  { id: 5, anything: 'e'}
]

const pageSize = 2

const AComponent = () => {
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
        <div onClick={nextPage}>go to next page</div>
        <div onClick={prevPage}>go to prev page</div>
        <div>{currentPage}/{totalPages}</div>
     </>
  ) 
}
```
