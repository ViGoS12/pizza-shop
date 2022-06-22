import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchValue: '',
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSortType(state, action) {
      state.sort = action.payload
    },
    setFilters(state, action) {
      state.sort = action.payload.sort
      state.categoryId = Number(action.payload.categoryId)
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload
    },
  },
})

export const { setCategoryId, setSortType, setFilters, setSearchValue } =
  filterSlice.actions

export default filterSlice.reducer
