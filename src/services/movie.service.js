import {api_key, url} from "../constants/url";
import {axiosServices} from "./axios.services";

export const movieService ={
    moviePopular: (page)=> axiosServices(url.movie+"/"+url.popular+"/"+api_key+`&page=${page}`).then(value => value.data.results),
    getOneMovie: (id)=> axiosServices(url.movie+"/"`${id}`).then(value => value.data)
}