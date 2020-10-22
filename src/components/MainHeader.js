import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';

const MainHeader = () => {
    return(

        <Jumbotron 
        className="p-0 text-white m-0" 
        fluid 
        id="intro">
            <Container className="text-center my-auto">
                <h1>Elder Gods Brewing</h1>
                <p>
                Brewing the finest local craft beer since 2002
                </p>
            </Container>
        </Jumbotron>

    );
}

export default MainHeader;