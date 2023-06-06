import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Movie from "../Movie/Movie";
import './AllMovies.css';

const AllMovies = () => {
    const allMovies = useLoaderData();
    return (
        <>
            <h1 className="fw-bold text-center mt-3">All Movies</h1>
            <Container className="movies">
                {
                    allMovies.map(movie => <Movie
                        key={movie.show.id}
                        movie={movie}></Movie>)
                }
            </Container>
        </>
    );
}
export default AllMovies;