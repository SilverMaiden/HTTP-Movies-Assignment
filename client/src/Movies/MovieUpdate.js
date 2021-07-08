import React, {useEffect, useState} from 'react';
import MovieForm from './MovieForm';
import MovieCard from './MovieCard';
import axios from 'axios';

const MovieUpdate = () => {
    let url = window.location.pathname;
    let id = url.substring(url.lastIndexOf('/') + 1);

    const [data, setData] = useState({});


    useEffect(() => {
        axios.get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
            setData(response.data)
        }
         )},[])


    return (
        <>
            <MovieForm id={id} singleMovie={data}/>
        </>

    )
}

export default MovieUpdate;
