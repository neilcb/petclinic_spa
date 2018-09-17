import React from 'react';
import { Link } from 'react-router-dom'

import { Table, 
    TabContent, 
    TabPane, 
    Nav, 
    NavItem, 
    NavLink, 
    Card, 
    Button, 
    CardTitle, 
    CardText, 
    Row, 
    Col,
    Form, 
    FormGroup, 
    Label, 
    Input} 
from 'reactstrap';
import classnames from 'classnames';
import ListRender from './ListRender'

export default class OwnerTable extends React.Component {
    
  state = {
      isLoading: true,
      owners: [],
      data: [],
      
      
      
  };
  
  async componentDidMount() {
      const response = await fetch('/petclinic/api/owners');
      const body = await response.json();
      this.setState({ owners: body, isLoading: false });
      
    }
  
  handleClick(e) {
      
      alert(e.target.value)
  }
 
    
  render() {
      
    const {owners,  isLoading} = this.state;
    
    var data =[]
    var spec;

    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
       
      <Table >
        <thead>
          <tr>
            <th>*</th>
            <th>Name</th>
         
            <th>Address</th>
            
            <th>City</th>
            <th>Telephone</th>
            <th>Pets</th>
          </tr>
        </thead>
        <tbody>
            
         {owners.map(owner =>
        
           <tr>
              <td>{owner.id}</td>
             
              <td>
                     <Link to={{ pathname: '/editvet', state: { ownerId: owner.id} }}>{owner.firstName}{owner.lastName}</Link>
              </td>
                     
              <td>{owner.address}</td>
              <td>{owner.city}</td>
              <td>{owner.telephone}</td>
                     
              
              <td>
              {data = owner.pets.map(p => 
               
              <Link to={{ pathname: '/mainscheduler', state: { petId: p.id} }}><ul>{p.name}</ul></Link>
              )}
              
              
              </td>
             
          </tr>
          )}
           
        </tbody>
      </Table>
     
    );
  }
}