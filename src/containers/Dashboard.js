import React, {useState} from 'react';
import axios from 'axios'
import '../css/containers/Dashboard.css'
import CarCard from '../components/CarCard'
import { Container,
    Row, 
    Col,
    Button,
    Form } from 'react-bootstrap';
import { Component } from 'react';
import { render } from '@testing-library/react';
import Auth from '@aws-amplify/auth';




class Dashboard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            newCarID: "",
            newCarName: "",
            x: "John",
            carList: [
                {
                    carID: "123",
                    carName: "BMW i8"
                },
                {
                  carID: "456",
                  carName: "Toyota Corolla"
              }
            ]
        }
        this.updateCarID = this.updateCarID.bind(this)
        this.updateCarName = this.updateCarName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        
    }

    
    
    componentDidMount() {
        const api = "https://jmz2acpxgh.execute-api.us-east-1.amazonaws.com/prod/user/get-cognito-id"


        Auth.currentAuthenticatedUser().then((user) => {
          console.log('Current user email = ' + user.attributes.email);
          console.log(user.attributes)
          console.log(user)
        });

        // axios.post(api, {
        //     cognitoID : "ceb72e1c-e0e1-42dc-8603-9f838005367b"
        //   })
        //   .then( (response) => {
        //     console.log(response);
        //   })
        //   .catch( (error) => {
        //     console.log(error);
        //   });
    
        
        //Get user's cognitoID
        axios.post(api, {
          email : "siddharth.vijay@mail.utoronto.ca"
        })
        .then( (response) => {
          console.log(response);
        })
        .catch( (error) => {
          console.log(error);
        });

        //Get user's data

        
    
     }
    
    updateCarID(e){
      this.setState({newCarID : e.target.value})
    }

    updateCarName(e){
      this.setState({newCarName : e.target.value})
    }


    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      
      console.log(data)
      console.log("Data is " + this.state.newCarID + " " + this.state.newCarName)
      
      const newArray = this.state.carList.concat({
        newCarID: this.state.newCarID,
        carName: this.state.newCarName
      })

      this.setState({carList: newArray})

      console.log(this.state.carList)
    }

    render(){      
      return(
        <div className= "parent_container_dashboard">
          
          
          
          
          
          <div className="user_welcome">
            <h4 className="user_welcome_text">Welcome, Siddharth Vijay</h4>
            
            {/* Note: logout_uri needs to be EXACT SAME as the signout url in cognito console */}
            <Button 
            className="logout_btn"
            variant="outline-success" 
            href="https://agltest.auth.us-east-1.amazoncognito.com/logout?client_id=6udbap9k9c743qirm1g4flp595&logout_uri=https://master.d8mrzxl42byhr.amplifyapp.com/">
                Logout
            </Button>

           
            <div className="add_car_div">
            <h5 className="user_welcome_texat">Add a vehicle</h5>
              {/* <Button 
                variant="outline-success"
                className="add_car_btn">
                + Add Car
              </Button> */}
              <Form className="add_car_form" onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Car ID</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="carID" 
                    placeholder="Car ID"
                    onChange={this.updateCarID}                    
                  />
                    
                  <br/>

                  <Form.Label>Car Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="carName"
                    placeholder="Car Name"
                    onChange={this.updateCarName}
                  />
                </Form.Group>
                <Button 
                  variant="primary" 
                  type="submit"
                  // onClick={submitNewCar}
                  >
                  Submit
                </Button>
              </Form>
            </div>
            
          
          </div>
            
            
            
          
          <Container className = "car_list mt-5">
            <Row>
              <Col sm={4}>
                <CarCard carName={this.state.carList[0].carName} carStatus={"Safe"}/>
              </Col>
              <Col sm={4}>
                <CarCard carName={"Honda Civic"} carStatus={"Unsafe"}/>
              </Col>
              <Col sm={4}>
                <CarCard carName={"Rolls-Royce Phantom"} carStatus={"Unavailable"}/>
              </Col>

              {this.state.carList.map(item => (
                <Col sm={4}>
                <CarCard carName={item.carName} carStatus={"Unavailable"}/>
              </Col>
              ))}
                
            </Row>
          </Container>                
        </div>
    )
  }
}

export default Dashboard