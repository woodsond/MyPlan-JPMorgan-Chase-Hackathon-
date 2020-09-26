import React from 'react';
import {Card} from 'react-bootstrap';

class CardDetails extends React.Component{
    render(){
        return(
            <Card style={{ width: '22rem', backgroundColor:'lightblue'}}>
            <Card.Body>
                <Card.Title>JPMorgan Chase Credit Card</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Bronze Level</Card.Subtitle>
                <Card.Text>
                    This card gives 4% cash back on groceries and gas, 3% cash back on 
                    common consumer goods, and 2% cash back on everything else.
                </Card.Text>
                <Card.Link href="#">jpmorgan.com</Card.Link>
            </Card.Body>
            </Card>
        );
    }
}

export default CardDetails;