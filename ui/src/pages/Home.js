import React from "react";

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

//import assets
import saving from '../assets/download.png';

const Home = () => {
  return (
    <div style={{marginTop: '10%'}}>
      <Container fluid={false} style={{marginLeft: '5%', marginRight:'5%'}}>
          <Row>
              <Col style={{}}>
                  <div>
                      <h2 className="display-4 font-weight-bolder justift-content-center"><span style={{color:'#39B54A'}}>myPlan</span></h2>
                  </div>
                  <div style={{marginTop: '5%'}}>
                      <h5>Plan the youth finacial future one step at a time.</h5>
                  </div>
                  <div style={{marginTop: '10%'}}>
                      <p>myPlan helps the youth learn about the world of finance in fun and easy ways. Start investing in the future now.</p>
                  </div>
                  <div>   
                      <Button variant="outline-success" onClick={event => window.location.href='/piggyBank'}>Start Saving</Button>
                  </div>
              </Col>
              <Col style={{marginBottom: 10}}>
                  <img src={saving} className='landphoto' style={{width: 800}} />
              </Col>
          </Row> 
      </Container>
</div>
  );
};
export default Home;
