import {api_key, url} from "../constants/url";
import {axiosServices} from "./axios.services";

export const movieService = {
    moviePopular: (page) => axiosServices.get(url.movie + "/" + url.popular + "/" + api_key + `&page=${page}`).then(value => value.data.results),
    getOneMovie: (id) => axiosServices.get(url.movie + "/" + `${id}` + api_key).then(value => value.data),
    getVideo: (id) => axiosServices.get(`movie/${id}/videos?api_key=64e6b72271fd3ad7f4e27db0609395b0`).then(value => value.data)
}