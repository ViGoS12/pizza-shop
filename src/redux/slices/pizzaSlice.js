import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { sortBy, order, category, search } = params
    const { data } = await axios.get(
      `https://62adae8c402135c7acc4f3b7.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
    )
    return data
  }
)

const initialState = {
  items: [],
  status: 'loading',
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading'
      state.items = []
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = 'error'
      state.items = []
    },
  },
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
