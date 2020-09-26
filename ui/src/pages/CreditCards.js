import React from "react";
import CardDetails from "../component/CardDetails.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class CreditCards extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "green" }}>Why Wait? Build Your Credit Today!</h1>
        <Container>
          <Row>
            <Col lg>
              <CardDetails></CardDetails>
            </Col>
            <Col lg>
              <CardDetails></CardDetails>
            </Col>
            <Col lg>
              <CardDetails></CardDetails>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default CreditCards;
