import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HeaderContainer extends React.Component{
    render(){
        return(
            <Jumbotron className="bg-transparent umbotron-fluid p-0 ">
                <Container fluid={true} >
                    <Row className="justify-content-center mt-5" >
                        <Col className="text-left ml-5" >
                            <h4 className="display-4 font-weight-bolder justift-content-center"><span style={{color:'#39B54A'}}>{this.props.title}</span></h4>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}
export default HeaderContainer;
