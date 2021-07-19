import { useState, useEffect } from "react";
import axios from "../helper/axios";
import "./Row.css";
import Youtube from "react-youtube";
// import movieTrailer from "movie-trailer";
import ReactPlayer from "react-player";

function Row({ title, fetchUrl, isLarge }) {
  const [movie, setMovie] = useState([]);
  const posterBaseUrl = "https://image.tmdb.org/t/p/original";
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setMovie(response.data.results);
    }

    fetchData();
  }, [fetchUrl]);
  
  
  const handleClick = () => {
    console.log("clicked")
    setShowVideo(!showVideo)
    console.log(showVideo)
  }

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="poster_path">
        {movie.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={handleClick}
              className={`row_poster ${isLarge && "row_posterLarge"}`}
              src={`${posterBaseUrl}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      <div className={showVideo ? "true" : "false"}>
        {/* The class below is when the video shows it will start playing */}
      <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" width="100%" playing={showVideo ? true : false} />
      </div>
    </div>
  );
}

export default Row;
