import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        list: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.list.push(action.payload)
        }
    }
})

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;