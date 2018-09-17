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

export default class AddEditVet extends React.Component {
    
  state = {
      isLoading: true,
      vets: [],
      data: [],
      
      
      
  };
  
  async componentDidMount() {
      const response = await fetch('/petclinic/api/vets');
      const body = await response.json();
      this.setState({ vets: body, isLoading: false });
      
    }
  
  handleClick(e) {
      
      alert(e.target.value)
  }
 
    
  render() {
      
    const {vets,  isLoading} = this.state;
    
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
         
            <th>Specialties</th>
          </tr>
        </thead>
        <tbody>
            
         {vets.map(vet =>
        
           <tr>
              <td>{vet.id}</td>
             
              <td>
                     <Link to={{ pathname: '/editvet', state: { vetId: vet.id} }}>{vet.firstName}{vet.lastName}</Link>
              </td>
          
            <td>
              {data = vet.specialties.map(s => 
               
                 <ul>{s.name}</ul>
              )}
              
              
           </td>
             
          </tr>
          )}
           
        </tbody>
      </Table>
     
    );
  }
}