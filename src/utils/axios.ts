import axios from "axios";

export const api = axios.create({
	baseURL: "http://localhost:5149/api", // Substitua pela sua URL da API
});