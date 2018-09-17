import React from 'react';
import VetTable from './VetTable';
import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';


export default class Vets extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
            <div>
      <div style={{display: 'flex',  hieght: '50%', width: '100%'}}>
        <VetTable />
         
      </div>
      <div>
            <Nav>
            <NavItem>
            
            
              <NavLink href="/addvet"><Button color="primary" size="lg">Add Vet</Button>{' '}</NavLink>
            </NavItem>
           </Nav>
      </div>
            </div>
    );
  }
}