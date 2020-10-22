import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap';

const Book = () => {
    return(

        <Jumbotron 
        className="p-0 text-white mx-0 book" 
        fluid 
        >
            <Container className="text-center my-auto">
            <Button className="book-tasting text-white" variant="outline-dark">BOOK A TASTING</Button>{' '}
            </Container>
        </Jumbotron>

    );
}

export default Book;