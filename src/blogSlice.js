import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    getNotes:(state,action) => {
      state.value = action.payload
    },
    delBlog: (state,action) => {
      state.value = state.value.filter((blog) => blog.id !== action.payload)  
      
    },
    addBlog: (state,action) => {
      state.value = [...state.value,action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { getNotes,delBlog,addBlog} = blogSlice.actions

export default blogSlice.reducer