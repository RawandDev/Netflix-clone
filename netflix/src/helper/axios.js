import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// instance.get("p") => "https://api.themoviedb.org/3/p"

export default instance;
