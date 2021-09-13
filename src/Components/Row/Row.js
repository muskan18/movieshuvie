import React,{useState,useEffect} from 'react';
import "./Row.css";
import axios from '../../axios';
const base_img_URL = "https://image.tmdb.org/t/p/original/"
const Row = ({title,fetchUrl,isLargeRow}) => {
const [movies,setMovies] = useState([]);

useEffect(()=>{

    async function fetchData(){
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovies(request.data.results);
        return request;
    }

    fetchData();

},[fetchUrl]);

console.log(movies);
return (
    <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
        {movies.map(movie => (

            <img 
            key={movie.id}
            className={`row_poster ${isLargeRow && "row__posterLarge"}`} 
            src={`${base_img_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} alt={movie.name}></img>
        ))}
        </div>
    </div>
);
}

export default Row;


