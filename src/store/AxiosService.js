import Axios from "axios"

let newsKey = "https://newsapi.org/v2/top-headlines?country=us&apiKey=c81be01485874f8c81e02f457799b44f"

export const newsApi = Axios.create({
  baseURL: newsKey,
  timeout: 10000,
})