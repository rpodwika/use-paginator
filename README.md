# use-paginator

A simple hook to paginate any dataset in JavaScript (TypeScript)

![Codecov](https://img.shields.io/codecov/c/github/rpodwika/use-paginator)
[![GitHub issues](https://img.shields.io/github/issues/rpodwika/use-paginator)](https://github.com/rpodwika/use-paginator/issues)
[![GitHub forks](https://img.shields.io/github/forks/rpodwika/use-paginator)](https://github.com/rpodwika/use-paginator/network)
[![GitHub stars](https://img.shields.io/github/stars/rpodwika/use-paginator)](https://github.com/rpodwika/use-paginator/stargazers)
[![GitHub license](https://img.shields.io/github/license/rpodwika/use-paginator)](https://github.com/rpodwika/use-paginator/blob/master/LICENSE)

## Why

I missed a very simple hook that would make pagination from any collection in JavaScript. This library is not about styling
but more about the controls that can be used with any library and adjusted to your needs. Personally, I used styled-components which I highly
recommend, but you can use whatever you want

## Usage 

`npm i @rpodwika/use-paginator` or `yarn add @rpodwika/use-paginator`

Sample code:
```
import React from "react";
import { usePaginator } from '@rpodwika/use-paginator'

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
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <div
              onClick={() => setCurrentPage(p)}
              data-is-active={p === currentPage}
              key={`page-${p}`}
            >
              {p}
            </div>
          ))}
     </>
  ) 
}
```

# Contributions

If you want to contribute, please open a pull request 

# Issues 

If you found an issue, please create a ticket

Did you like it? Please star this, it'll give me a motivation to share more code with YOU! 🙏
