import axios from "axios";

export const api = axios.create({
  // baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app?delay=2000", // url teste delay
  // baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app",
  baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app?internalError",
});
