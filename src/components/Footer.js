import React from 'react';

const Footer = () => {

    return(

      <div className="row justify-content-around m-0">
            <div className="d-flex flex-column align-items-left">
                <h5>Locations:</h5>
                <ul className="row list-unstyled">
                    <li className="col-6 small my-2">
                        <p className="m-1">20209 Draconis Lane</p>
                        <p className="m-1">Camelot, BC, Zip Code</p>
                        <p className="m-1">(000) 000-0000</p>
                    </li>
                    <li className="col-6 small my-2">
                        <p className="m-1">55676 Somewhere Drive</p>
                        <p className="m-1">Abbotsford, BC, Zip Code</p>
                        <p className="m-1">(000) 000-0000</p>
                    </li>
                    <li className="col-6 small my-2">
                        <p className="m-1">49785 Aldergrove Court</p>
                        <p className="m-1">Langley, BC, Zip Code</p>
                        <p className="m-1">(000) 000-0000</p>
                    </li>
                </ul>
            </div>
            <div className="d-flex flex-column align-items-left">
                <h5>Working Hours:</h5>
                <div className="row">
                    <div className="col-6 small">
                        <p>Monday-Friday</p>
                        <p>Saturday</p>
                        <p>Sunday</p>
                    </div>
                    <div className="col-6 small">
                        <p>9:00 AM - 5:00 PM</p>
                        <p>12:00 AM - 11:00 PM</p>
                        <p>Closed</p>
                    </div>
                </div>
            </div>
      </div>

    );

}

export default Footer;