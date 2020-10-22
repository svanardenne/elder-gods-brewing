import React from 'react';
import Card from 'react-bootstrap/Card';

const Cards = (props) => {

    return(
        <div className="col-md-4 text-dark">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.teamImg} />
            <Card.Body>
                <Card.Title>{props.teamTitle}</Card.Title>
                <Card.Text>{props.teamText}</Card.Text>
            </Card.Body>
            </Card>
        </div>
    );

}

export default Cards;