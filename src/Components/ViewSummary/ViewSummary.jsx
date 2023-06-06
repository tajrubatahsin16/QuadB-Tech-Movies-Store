import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../../utilities/savedMovies";

const ViewSummary = () => {
    const movies = useLoaderData();
    console.log(movies);
    const { id } = useParams();
    const [sum, setSum] = useState([]);
    useEffect(() => {
        const movieData = movies.find(movie => movie.show.id == id);
        setSum(movieData);
    }, [])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container>
            <h2 className="text-center fw-bold mt-3">Detailed Info of {sum?.show?.name}</h2>
            <div className="border border-warning rounded my-3">
                <h4 className="fst-italic fw-semibold p-5">{sum?.show?.summary}</h4>
            </div>
            <Button onClick={handleShow} className="fst-italic fw-semibold" variant="outline-warning">Book Now!</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Give Information to book ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Movie Name</Form.Label>
                            <Form.Control type="text" defaultValue={sum?.show?.name} disabled />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Name Here" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your Phone No.</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Number Here" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Your Email Here" required/>
                        </Form.Group>
                    </Form>
                    <p className="fst-italic fw-semibold">You can book only one ticket for each movie!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Link to="/"><Button onClick={() => addToDb(sum.show.id)} variant="outline-warning">
                        Book Ticket!
                    </Button></Link>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
export default ViewSummary;