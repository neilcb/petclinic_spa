import React from 'react';
import VetTable from './VetTable';
import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';


export default class ListRender extends React.Component {
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
            <ul>
            {this.props.list.map(function(listValue){
              return <li>{listValue}</li>;
            })}
          </ul>
    );
  }
}