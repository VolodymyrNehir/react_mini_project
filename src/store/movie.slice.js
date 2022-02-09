import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../services/movie.service";

const initialState = {
    movies: [],
    status: "",
    error: "",
    page:1,
    id:0

}

export const getAllMovies = createAsyncThunk(
    "moviesSlice/getAllMovies",
    async (page,{rejectWithValue}) => {
        try {
            return await movieService.moviePopular(page);
        } catch (e) {
            return rejectWithValue(e.message)
        }


    }
)

const movieSlice = createSlice({
        name: "movieSlice",
        initialState,
        reducers: {
            getMovie:()=> (state,action)=>{
                state.id =action.payload
            }

        },
        extraReducers: {
            [getAllMovies.pending]: (state, action) => {
                state.status = "pending";
                state.error = action.payload;
            },
             [getAllMovies.fulfilled]: (state, action) => {
                state.status = "fulfilled";
                state.page +=1;
                state.movies = state.movies.concat(action.payload);
            },
            [getAllMovies.rejected]: (state,action)=>{
                state.status = "rejected";
                state.error = action.payload;
            }
        }
    }
)
const moviesReducer = movieSlice.reducer;
export const {getMovie} = movieSlice.actions;
export default moviesReducer;
