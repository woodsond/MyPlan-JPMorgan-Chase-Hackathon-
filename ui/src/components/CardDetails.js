import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const CardDetails = (props) => {
  return (
    <Row>
      <Card style={{ width: "22rem", backgroundColor: "white" }}>
        <Card.Body>
          <Card.Title>
            <b>{props.title}</b>
          </Card.Title>
          <Card.Subtitle>Annual Fee: {props.annualFee}</Card.Subtitle>
          <br></br>
          <Card.Text>{props.description}</Card.Text>
          <Card.Link href={props.url}>Apply or Learn More</Card.Link>
        </Card.Body>
      </Card>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <img
        style={{ height: 200, width: 300 }}
        src={props.image}
        alt={"Card Details"}
      ></img>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <Col>
        <img
          style={{ height: 95, width: 300 }}
          src={props.reviews}
          alt={"Card Details"}
        ></img>
        <img
          style={{ height: 95, width: 300 }}
          src={props.apr}
          alt={"Card Details"}
        ></img>
      </Col>
    </Row>
  );
};

export default CardDetails;
