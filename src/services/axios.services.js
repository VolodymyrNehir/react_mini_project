import axios from "axios";
import {baseURL} from "../constants/url";

export const axiosServices = axios.create({baseURL});