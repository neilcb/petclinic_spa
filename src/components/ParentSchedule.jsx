import React from 'react';
import { Link } from 'react-router-dom'
import PetSchedule from './PetSchedule'
import Moment from 'moment';
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

export default class ParentSchedule extends React.Component {
    
          state = {
              date: new Date(),
              petId: '',
              
          }
         
          constructor(props) {
              super(props);
              super(props);
              
              const {petId} = props.location.state
              this.state.petId = petId
             
               
              this.onDateChange = this.onDateChange.bind(this);
          }
          
         // onChange = value => this.setState({ value })
          onDateChange(event) {
              var dt = event.toString();
              Moment.locale('en');
              var formatedDt = Moment(dt).format('YYYY/MM/DD');
              date => this.setState({date:formatedDt})
              alert(this.state.date)
              
          }
         
          render() {
              
              const { value } = this.state;
            return (
              <div>
                    <div>
                        <Calendar
                            onChange={this.onDateChange}
                            value={this.state.date}
                        />
                    </div>
                    <div>
                    <PetSchedule petId={this.state.petId} />
                    </div>
              </div>
              
            );
          }
          
          
  
}