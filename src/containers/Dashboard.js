import React from 'react';
import '../css/containers/Dashboard.css'
import CarCard from '../components/CarCard'
import { Container, Row, Col } from 'react-bootstrap';

class Dashboard extends React.Component {
    render(){
        return(
            <div className= "parent_container_dashboard">
                <h4 className="user_welcome">Welcome, John Doe</h4>
                <Container className = "car_list mt-5">
                    <Row>
                        <Col sm>
                            <CarCard carName={"Toyota Rav4"} carStatus={"Safe"}/>
                        </Col>
                        <Col sm>
                            <CarCard carName={"Honda Civic"} carStatus={"Unsafe"}/>
                        </Col>
                        <Col sm>
                            <CarCard carName={"Rolls-Royce Phantom"} carStatus={"Unavailable"}/>
                        </Col>
                    </Row>
                </Container>                
            </div>
        )
    }
}

export default Dashboard