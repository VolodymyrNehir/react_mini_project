import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../services/movie.service";

const initialState = {
    movies: [],
    movie: [],
    status: "",
    error: "",
    page: 1,
    id: 0

}

export const getAllMovies = createAsyncThunk(
    "moviesSlice/getAllMovies",
    async ({page}, {rejectWithValue}) => {
        try {
            return await movieService.moviePopular(page);
        } catch (e) {
            return rejectWithValue(e.message)
        }


    }
)
export const getMovie = createAsyncThunk(
    "moviesSlice/getMovie",
    async ({id}, {rejectWithValue}) => {
        try {
            return await movieService.getOneMovie(id);
        } catch (e) {
            return rejectWithValue(e.message)
        }


    }
)

const movieSlice = createSlice({
        name: "movieSlice",
        initialState,
        reducers: {},
        extraReducers: {
            [getAllMovies.pending]: (state, action) => {
                state.status = "pending";
                state.error = action.payload;
            },

            [getAllMovies.fulfilled]: (state, action) => {
                state.status = "fulfilled";
                state.page += 1;
                state.movies = state.movies.concat(action.payload);
            },

            [getAllMovies.rejected]: (state, action) => {
                state.status = "rejected";
                state.error = action.payload;
            },


            // extraReducers getAllMovies


            [getMovie.pending]: (state, action) => {
                state.status = "pending";
                state.error = action.payload;

            },

            [getMovie.fulfilled]: (state, action) => {
                state.movie = action.payload;
                console.log(action.payload)
            },

            [getMovie.rejected]: (state, action) => {
                state.status = "rejected";
                state.error = action.payload;
            }

            // extraReducers getMovie

        }
    }
)

const moviesReducer = movieSlice.reducer;
export default moviesReducer;
