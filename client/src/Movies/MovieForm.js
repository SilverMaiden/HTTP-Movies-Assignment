import React, {useState, useEffect} from 'react';
import Movie from "./Movie";
import axios from 'axios';
import {Link} from "react-router-dom";

const MovieForm = (props) => {
    const [movie, setMovie] = useState({
    title: "",
    director: "",
    metascore:"",
    star: "",
    stars: "",
    })


    useEffect(() => {
    if (props.singleMovie) {

        setMovie({
           title: props.singleMovie.title,
            director: props.singleMovie.director,
            metascore: props.singleMovie.metascore,
            star: "",
            stars: props.singleMovie.stars,
        })}

    }, [props.singleMovie])

    const handleChange = event => {
        event.preventDefault();
        setMovie({...movie, [event.target.name]: event.target.value})
        console.log(movie)
    }
    const handleClick = event => {
        event.preventDefault();
        axios
        .put(`http://localhost:5000/api/movies/${props.id}`, {
            id: props.id,
            title: movie.title,
            director: movie.director,
            metascore: movie.metascore,
            stars: movie.stars.concat(movie.star)
        }).then(response => {
            console.log(response.data)
        })

        setMovie({
            title: props.singleMovie.title,
            director: props.singleMovie.director,
            metascore: props.singleMovie.metascore,
            stars: movie.stars.concat(movie.star),
            star: "",
        })
    }

    return (
        <form>
        <h1> HI </h1>
            <input
                type="text"
                placeholder="title"
                name="title"
                onChange={handleChange}
            />

            <input
                type="text"
                placeholder="director"
                name="director"
                onChange={handleChange}
            />

            <input
                type="text"
                placeholder="metascore"
                name="metascore"
                onChange={handleChange}
            />

            <input
                type="text"
                placeholder="star"
                name="star"
                onChange={handleChange}
            />
            <Link to="/"><button onClick={handleClick}> Update </button></Link>

        </form>
    )
}

export default MovieForm;
