import { useState, useEffect } from "react";
import instance from "../helper/axios";
import "./Row.css"

function Row({ title, fetchUrl, isLarge }) {
  const [movie, setMovie] = useState([]);
  const posterBaseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const response = await instance.get(fetchUrl);
      setMovie(response.data.results);
    }

    fetchData();
  }, [fetchUrl]);

  console.log(movie);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="poster_path">
        {movie.map((mo) => {
          return (
            <img
              key={mo.id}
              className={`row_poster ${isLarge && "row_posterLarge"}`}
              src={`${posterBaseUrl}${isLarge ? mo.poster_path : mo.backdrop_path}`}
              alt={mo.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
