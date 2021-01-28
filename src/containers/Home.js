import React from 'react';
import  '../css/containers/Home.css'
import {Button} from 'react-bootstrap';


class Home extends React.Component {
    render() {
        return(
            <div className="parent_container">
                <h1 className="title">AGL WebApp</h1>
                
                <div className="signup_login">
                    <Button 
                    variant="outline-success" 
                    href="https://agltest.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=6udbap9k9c743qirm1g4flp595&redirect_uri=https://master.d8mrzxl42byhr.amplifyapp.com/dashboard">
                        SignUp / Login
                    </Button>
                </div>
               
            </div>
            
        )
    }
}

export default Home;