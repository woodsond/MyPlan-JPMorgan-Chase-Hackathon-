import React from 'react';
import "./homePageFooter.css";

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*Column1*/}
                    <div className="col">
                        <h4>About Us!</h4>
                        <ul className="list-unstyled">
                            <li>Our Story</li>
                            <li>Leadership and Staff</li>
                            <li>Board of Directors</li>
                            <li>Financials</li>
                            <li>Funders</li>
                            </ul>
                    </div>
                    {/*Column2*/}
                    <div className="col">
                        <h4>Contact Us!</h4>
                        <ul className="list-unstyled">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <p className="col-sm">
                        &copy; {new Date().getFullYear()} Copyright  MyPath | All Rights Reserved 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;