import { renderHook, act } from '@testing-library/react-hooks'
import { usePaginator} from "../usePaginator";

describe('usePaginator tests', () => {
    const dataSample =  [
        { id: 1, anything: 'a'},
        { id: 2, anything: 'b'},
        { id: 3, anything: 'c'},
        { id: 4, anything: 'd'},
        { id: 5, anything: 'e'}
    ]

    it('Should be defined', () => {
        expect(usePaginator).toBeDefined()
    })

    it('Should render the hook and check types', () => {
        const {
            result
        } = renderHook(() => usePaginator(dataSample))


        expect(typeof result.current.currentPage).toBe('number')
        expect(typeof result.current.isPaginating).toBe('boolean')
        expect(typeof result.current.nextPage).toBe('function')
        expect(typeof result.current.prevPage).toBe('function')
        expect(Array.isArray(result.current.pageItems)).toBe(true)
        expect(typeof result.current.setCurrentPage).toBe('function')
        expect(typeof result.current.setItemList).toBe('function')
        expect(typeof result.current.totalPages).toBe('number')
    })

    it('Should have correct starting values', () => {
        const {
            result
        } = renderHook(() => usePaginator(dataSample, 2))

        expect(result.current.currentPage).toBe(1)
        expect(result.current.isPaginating).toBe(true)
        expect(result.current.pageItems.length).toBe(2)
        expect(result.current.totalPages).toBe(3)
    })

    it('Should move the next page', () => {
        const pageSize = 2
        const {
            result
        } = renderHook(() => usePaginator(dataSample, pageSize))

        act(() => {
            result.current.nextPage()
        })

        expect(result.current.currentPage).toBe(2)
    })

    it('Should move the prev page', () => {
        const pageSize = 2
        const {
            result
        } = renderHook(() => usePaginator(dataSample, pageSize))

        act(() => {
            result.current.setCurrentPage(3)
            result.current.prevPage()
        })

        expect(result.current.currentPage).toBe(2)
    })

    it('Should not move backwards when there is no page to display', () => {
        const pageSize = 2
        const {
            result
        } = renderHook(() => usePaginator(dataSample, pageSize))

        act(() => {
            result.current.setCurrentPage(1)
            result.current.prevPage()
        })

        expect(result.current.currentPage).toBe(1)
    })

    it('Should not move forward when there is no page to display', () => {
        const pageSize = 4
        const {
            result
        } = renderHook(() => usePaginator(dataSample, pageSize))

        act(() => {
            result.current.setCurrentPage(2)
            result.current.nextPage()
        })

        expect(result.current.currentPage).toBe(2)
    })

    it('Should move to any page', () => {
        const pageSize = 2
        const pageToGo = 3
        const {
            result
        } = renderHook(() => usePaginator(dataSample, pageSize))

        act(() => {
            result.current.setCurrentPage(pageToGo)
        })

        expect(result.current.currentPage).toBe(pageToGo)
    })

    it('Should set a new collection of items', () => {
        const newData = [
            { id: 6, anything: 'a'},
            { id: 7, anything: 'b'},
            { id: 8, anything: 'c'},
        ]
        const {
            result
        } = renderHook(() => usePaginator(dataSample, 2))

        act(() => {
            result.current.setItemList(newData)
        })

        expect(result.current.totalPages).toBe(2)
        expect(result.current.isPaginating).toBe(true)
    })
})
