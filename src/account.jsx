import React,{Component} from 'react';
import{BrowserRouter as Router,Link,Switch,Route,Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar,Jumbotron} from 'react-bootstrap';
import Saving from'./saving';
import Current from './current';
import  Lavanya from './lavanya';




class Account extends Component{
    render(){
        return(
            <div className="App" >
            <Router>
            <Navbar bg="dark" variant="dark">
            
    
              <Navbar.Brand href="#home">account details screen</Navbar.Brand>
              
              {/* <Nav className="mr-auto"></Nav> */}
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                {/* <Navbar.Text>
                  Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text> */}
                
                        {/* <div style={{color:"white"}}>
                       
                            <b><i>emailid:</i></b>
                            <br></br>
                            
                            <b><i>password:</i></b>
                        </div>
                         */}
                        
                <Nav.Link><Link to="/saving">saving</Link></Nav.Link>
                <Nav.Link><Link to="/current">current</Link></Nav.Link>
                
              </Navbar.Collapse>
              </Navbar>
            
            
      
            
            <Jumbotron>
              <Switch>
                <Route exact path="/">< Redirect to="saving" /></Route>
                <Route path="/saving" component={Saving}></Route>
                <Route path="/current" component={Current}></Route>
                
                
              </Switch>
              
      
            </Jumbotron>
            </Router>
            <Lavanya/>
            
            
          </div>
          
          
        )
    }
}
 export default Account;