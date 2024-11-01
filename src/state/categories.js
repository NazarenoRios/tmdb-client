import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import requests from "../utils/requests";
import axios from "axios";


export const CategoryDisneyRequest = createAsyncThunk("DISNEY_CATEGORY", ({get_url, setMovies}) => {
    return axios.get(`${get_url}${requests.fetchDisney}`, { withCredentials: false })
      .then(res => setMovies(res.data.items))
})

export const CategoryMarvelRequest = createAsyncThunk("MARVEL_CATEGORY", ({get_url, setMovies}) => {
    return axios.get(`${get_url}${requests.fetchMarvel}`, { withCredentials: false })
      .then(res => setMovies(res.data.items))
})

export const CategoryNatGeo = createAsyncThunk("NATGEO_CATEGORY", ({get_url, setMovies}) => {
  return axios.get(`${get_url}${requests.fetchNatGeo}`, { withCredentials: false })
    .then(res => setMovies(res.data.items))
})

export const CategoryPixarRequest = createAsyncThunk("PIXAR_CATEGORY", ({get_url, setMovies}) => {
    return axios.get(`${get_url}${requests.fetchPixar}`, { withCredentials: false })
      .then(res => setMovies(res.data.items))
})

export const CategoryStarWarsRequest = createAsyncThunk("STARWARS_CATEGORY", ({get_url, setMovies}) => {
    return axios.get(`${get_url}${requests.fetchStarWars}`, { withCredentials: false })
      .then(res => setMovies(res.data.items))
})


const categoriesReducer = createReducer(
    {},
    {
        [CategoryDisneyRequest.fulfilled]: (state,action) => action.payload,
        [CategoryMarvelRequest.fulfilled]: (state,action) => action.payload,
        [CategoryNatGeo.fulfilled]: (state,action) => action.payload,
        [CategoryPixarRequest.fulfilled]: (state,action) => action.payload,
        [CategoryStarWarsRequest.fulfilled]: (state,action) => action.payload,
    }
)

export default categoriesReducer;