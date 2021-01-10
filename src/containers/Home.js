import React from 'react';
import  '../css/containers/Home.css'
import {Button} from 'react-bootstrap';


class Home extends React.Component {
    render() {
        return(
            <div className="parent_container">
                <h1 className="title">AGL WebApp</h1>
                
                <div className="signup_login">
                    <Button variant="outline-success" >
                        SignUp
                    </Button>
                    <Button variant="outline-success" href="/dashboard">
                        Login
                    </Button>
                </div>
               
            </div>
            
        )
    }
}

export default Home;