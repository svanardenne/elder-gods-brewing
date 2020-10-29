import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap';

const MainHeader = () => {
    return(

        <Jumbotron 
        className="p-0 text-white m-0" 
        fluid 
        id="intro">
            <Container className="text-center my-auto">
                <h1 className="header-title">Elder Gods Brewing</h1>
                <p className="header-text">
                Brewing the finest local craft beer since 2002
                </p>
                <div className="header-buttons">
                    <Button className="headline-button text-white m-2" variant="outline-dark">SEE MENU</Button>{' '}
                    <Button className="headline-button text-white m-2" variant="outline-dark">BOOK A TASTING</Button>{' '}
                </div>
            </Container>
        </Jumbotron>

    );
}

export default MainHeader;