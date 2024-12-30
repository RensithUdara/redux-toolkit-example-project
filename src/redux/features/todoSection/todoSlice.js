import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return result.data;
});

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        loading: false,
        todos: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload;
        });
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const todoReducer = todoSlice.reducer;

export const {  } = todoSlice.actions;