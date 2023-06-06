import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
    const { show } = movie;
    return (
        <Card style={{ width: '18rem' }} className="my-3">
            <Card.Img variant="top" src={show.image.medium} />
            <Card.Body>
                <Card.Title className="fw-bold">Movie Name: {show.name ? show.name : 'Not Available'}</Card.Title>
                <Card.Text className="fst-italic fw-semibold">Language: {show.language ? show.language : 'Not Available'}</Card.Text>
                <Card.Text className="d-flex gap-2 fst-italic fw-semibold">
                    <p>Genres: {show.genres[0]},</p>
                    <p>{show.genres[1]}</p>
                </Card.Text>
                <Card.Text className="fst-italic fw-semibold">Current Status: {show.status ? show.status : 'Not Available'}</Card.Text>
                <Card.Text className="fst-italic fw-semibold">Show Runtime: {show.runtime ? show.runtime : 'Not Available'}</Card.Text>
                <Card.Text className="fst-italic fw-semibold">Premier Date: {show.premiered ? show.premiered : 'Not Available'}</Card.Text>
                <Link to={`/view/${show.id}`}><Button className="fst-italic fw-semibold" variant="outline-warning">Movie Details</Button></Link>
            </Card.Body>
        </Card>
    );
}
export default Movie;