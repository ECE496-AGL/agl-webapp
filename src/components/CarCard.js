import React from 'react';
import '../css/components/CarCard.css'
import {Card, Button} from 'react-bootstrap';

class CarCard extends React.Component  {

    constructor(props) {
        super(props);
        this.dismissAlert = this.dismissAlert.bind(this)
        this.state = { status: this.props.carStatus };
    }
    dismissAlert(){
        this.setState({status : "Safe"});
        console.log("updated")
    }
    
    render() {

        let carStatusText;

        let dismissButton = "";

        if (this.state.status === "Safe")
            carStatusText = <span style={{color: "green"}}>Safe</span>
        else if (this.state.status === "Unsafe"){
            carStatusText = <span style={{color: "red"}}>Anomaly Detected</span>
            dismissButton = <Button 
                                variant="outline-success" 
                                onClick={this.dismissAlert}>
                                Dismiss
                            </Button>
        }
        else
            carStatusText = <span style={{color: "slategrey"}}>Unavailable</span>


        return(
            <Card className="car_card_container mt-5 mb-5">
                <Card.Body>
                    <h3>{this.props.carName}</h3>
                    <br/>
                    
                    <Card.Title className="mb-2">
                        Last Active: 2020-01-04
                    </Card.Title>
                    <Card.Title>
                        Car Status: {carStatusText}
                        <br/><br/>
                        {dismissButton}
                    </Card.Title>
                </Card.Body>
            </Card> 
        )
    }
}

export default CarCard;

