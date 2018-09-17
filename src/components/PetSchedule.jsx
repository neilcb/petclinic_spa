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
import Calendar from 'react-calendar';
import classnames from 'classnames';
import ListRender from './ListRender'

export default class PetSchedule extends React.Component {
    
    constructor(props) {

        // Required to call original constructor
        super(props);

        // Props are now accessible from here
        var petId = props.petId;
        var date = props.date;
        
    }
    
    myFunction() {
        alert("my function");
    }
    
    render() {

        // And from here
        return (<div>{this.props.petId}{this.props.date}</div>)
    }
}