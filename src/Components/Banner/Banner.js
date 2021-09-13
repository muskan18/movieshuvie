import React ,{useState} from 'react';
import { useEffect } from 'react/cjs/react.development';
import axios from '../../axios';
import requests from '../../requests';

const Banner = () =>{
    const [movie,setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            //console.log(request.data.results[]);
          //  Math.floor(Math.random() *)
        }
        fetchData();
    },[]);
    return (
        <h1>Banner</h1>
    );
}

export default Banner;