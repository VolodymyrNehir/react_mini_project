import {api_key, url} from "../constants/url";
import {axiosServices} from "./axios.services";

export const movieService ={
    moviePopular: (page)=> axiosServices.get(url.movie+"/"+url.popular+"/"+api_key+`&page=${page}`).then(value => value.data.results),
    getOneMovie: (id)=> axiosServices.get(url.movie+"/"+`${id}`+ api_key).then(value => value.data)
}