import React from 'react';


const About = (props) => {
    
    return(
        <div className="row justify-content-center align-items-center mx-0 my-3 last-about">
            <div className="col-md-4">
                <h2>{props.aboutTitle}</h2>
                <p>{props.aboutText}</p>
            </div>
            <div className="col-md-4">
                <img className="img-fluid" src={props.aboutImg} alt="Man holding a hop"></img>
            </div>
        </div>
    );
}

export default About;