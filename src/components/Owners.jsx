import React from 'react';
import OwnerTable from './OwnerTable';
import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';


export default class Owners extends React.Component {
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
        <OwnerTable />
         
      </div>
      <div>
            <Nav>
            <NavItem>
            
            
              <NavLink href="/editowner"><Button color="primary" size="lg">Add Owner</Button>{' '}</NavLink>
            </NavItem>
           </Nav>
      </div>
            </div>
    );
  }
}