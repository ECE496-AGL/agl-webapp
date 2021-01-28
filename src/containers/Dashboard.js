import React from 'react';
import '../css/containers/Dashboard.css'
import CarCard from '../components/CarCard'
import { Container,
    Row, 
    Col,
    Button } from 'react-bootstrap';


class Dashboard extends React.Component {
    render(){
        return(
            <div className= "parent_container_dashboard">
                <div className="user_welcome">
                    <h4 className="user_welcome_text">Welcome, John Doe</h4>
                    
                    {/* Note: logout_uri needs to be EXACT SAME as the signout url in cognito console */}
                    <Button 
                    variant="outline-success" 
                    href="https://agltest.auth.us-east-1.amazoncognito.com/logout?client_id=6udbap9k9c743qirm1g4flp595&logout_uri=https://master.d8mrzxl42byhr.amplifyapp.com/">
                        Logout
                    </Button>
                
                </div>
                
                
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