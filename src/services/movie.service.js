import {api_key, url} from "../constants/url";
import {axiosServices} from "./axios.services";

export const movieService ={
    moviePopular: axiosServices(url.movie+"/"+url.popular+"/"+api_key+"/"+`&page=1`).then(value => value.data)
}