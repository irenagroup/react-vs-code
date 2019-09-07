let nextTodoId = 0
export const addStock = stock => ({
  type: 'ADD_STOCK',
  id: nextTodoId++,
  stock
})

export const getStocks = stocks => (
{
  type: 'GET_STOCKS',
  currentId: nextTodoId++,
  stocks
})

export const addAllStocks = stocks =>({
    type: 'ADD_ALL_STOCKS',
    currentId: nextTodoId++,
    stocks
})



export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const deleteStock = id => ({
  type: 'DELETE_STOCK',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}