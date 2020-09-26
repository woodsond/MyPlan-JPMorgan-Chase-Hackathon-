import React from 'react';
import {Card, Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import {Image, View} from 'react';

const CardDetails = (props) => {
        return(
            <Row>
                    <Card style={{ width: '22rem', backgroundColor:'white'}}>
                    <Card.Body>
                    <Card.Title><b>{props.title}</b></Card.Title>
                        <Card.Subtitle>Annual Fee: {props.annualFee}</Card.Subtitle>
                        <br></br>
                        <Card.Text>
                            {props.description}
                        </Card.Text>
                        <Card.Link href={props.url}>Apply or Learn More</Card.Link>
                    </Card.Body>
                    </Card>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <img style={{height: 200, width: 300}}src={props.image}></img>
            </Row>
        );
}

export default CardDetails;