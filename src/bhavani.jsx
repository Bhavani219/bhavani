import React, { Component } from 'react';
import {Table } from 'react-bootstrap';

class Bhavani extends Component{
    render(){
        return(
            <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>

              <th>Account Balance</th>
              <th>Last transaction date</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>15000</td>
              <td>22-02-2021</td>

            </tr>
            {/* <tr>
                <td>30000</td>
                <td>15-02-2021</td>
                
              </tr>
              <tr>
                <td>70000</td>
                <td >25-01-2021</td>
               
              </tr>
              <tr>
                <td>50000</td>
                <td >10-01-2021</td>
               
              </tr>
              <tr>
                <td>25000</td>
                <td >7-12-2020</td>
               
              </tr>
              <tr>
                <td>10000</td>
                <td >7-01-2021</td>
               
              </tr> */}
          </tbody>
        </Table>
        
      </div>
    
        )
    }
}

export default Bhavani;