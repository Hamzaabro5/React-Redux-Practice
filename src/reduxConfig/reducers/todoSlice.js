import { createSlice, nanoid }  from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: `todos`,
    initialState: {
        todo: []
    },
    reducers: {
        addTodo: (state , action) => {
            state.todo.push({
                content: action.payload.content,
                id: nanoid()
            })
        },
        removeTodo: (state , action) => {
            state.todo.splice(action.payload.index , 1)
        },
        editTodo: (state , action) => {
            const updatedTodo = prompt()
            state.todo.splice(action.payload.index , 1 ,{content: updatedTodo, id: nanoid()})
        }
    }
})






export const {addTodo , removeTodo , editTodo , updatedTodo} = todoSlice.actions
export default todoSlice.reducer