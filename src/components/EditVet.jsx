import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter, Route } from 'react-router-dom'
import Vets from './Vets'
import { Button, 
         Form, 
         FormGroup, 
         Label, 
         Input
        
} from 'reactstrap';

export default class EditVet extends React.Component {
    
   
    
    constructor(props) {
        super(props);
         
        
          
    
         
          this.state = {
           vetId: '',
           vet: '',
           firstName: '',
           lastName: '',
           specialties: [],
           selectedSpecialties: [],
           selectedIds:[],
           validate: {
            inputState: '',
            
          },
        }
          
          const {vetId} = props.location.state
          this.state.vetId = vetId
         
          this.handleChange = this.handleChange.bind(this);
          
      }
    
   
   
        
    async componentDidMount() {
        
       
        
        console.log(this.state.vetId)
        if (this.state.vetId != null || this.state.vetId > 0) {
            console.log("vet id is not null, so load from api")
            alert(this.state.vetId)
            const response = await fetch('/petclinic/api/vets/'+this.state.vetId, {
                method: 'GET'
            });
            const body = await response.json();
            this.setState({ vet: body});
           
            this.getPreviousSpecialties();
            
          
        } else {
            this.getSpecialties();
        }
              
            
    }
    
    getPreviousSpecialties() {
        
        if(this.state.vet.specialties != undefined) {
            const userStr = JSON.stringify(this.state.vet.specialties);
            var selectedIds = [];

            JSON.parse(userStr, (key, value) => {
             
              if(key === 'id') {
                 selectedIds.push(value);
              }
            });
          
          
           return selectedIds;
        }

        
    }
    
    getSelectValues(event) { 
             
        let target = event.target; 
       
        const data = new FormData(event.target);
        console.log(data)
        let id = Array.from(target.selectedOptions, option => parseInt(option.value, 10)); 
     
        var json = '[' + id + ']';
        var array = JSON.parse(json);
       
        console.log(array)
        
        var selectedIds = [];
        var i;
        for(i=0; i < id.length; i++) {
            var obj = {}
           
            obj["id"] = id[i];
            obj["name"] = "";
            
            selectedIds.push(obj)
            console.log(id[i]);
        }
        console.log(selectedIds); 
       
        this.setState({
          selectedIds: selectedIds
        });
     
    }
    
    async getSpecialties () {
        const response = await fetch('/petclinic/api/specialties');
        const body = await response.json();
        this.setState({ specialties: body});
    }
    
    validateInput(e) {
       
        const { validate } = this.state
          if (e.target.value !== '') {
            validate.inputState = 'has-success'
          } else {
            validate.inputState = 'has-danger'
          }
          this.setState({ validate })
        }
    
    handleChange = async (event) => {
        
        const { target } = event;
        const value = target.value;
        const { name } = target;
        await this.setState({
          [ name ]: value,
        });
      }
    
    submitForm(event) {
        var url = '/petclinic/api/vets/';
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(this.state.selectedIds)
        var json = JSON.stringify({
                "id": data.get("vetId"),
                "firstName": data.get("firstName"),
                "lastName": data.get("lastName"),
                "specialties": this.state.selectedIds
                                
                              
         })
       
        
        var request = new Request(url+this.state.vetId, {
            method: 'PUT', 
            body: json, 
            headers: new Headers({
                'Content-Type': 'application/json',
                Accept: 'application/json',
             })
        });

        fetch(request)
        .then(function() {
            alert("updated")
           
          
        })
     
    }
    
    
      render() {
         
          var data =[]
         
         
         const {specialties, vet} = this.state;
         
         if(vet.specialites != undefined) {
             this.state.specialties = vet.specialties
         } else {
             this.getSpecialties();
         }
       
        return (
            <div>
              <Form onSubmit={ (e) => this.submitForm(e) } method='POST'>
                <Input hidden type="vetId" name="vetId" id="vetId" value={this.state.vetId}/>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input type="firstName" name="firstName" id="firstName" placeholder="Enter First Name" 
                  
                  value={ vet.firstName }
                  valid={ this.state.validate.inputState === 'has-success' }
                  invalid={ this.state.validate.inputState === 'has-danger' }
                  onChange={ (e) => {
                              
                              this.handleChange(e)
                  } }
                  
                  />
                </FormGroup>  
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input type="lastName" name="lastName" id="lastName" placeholder="Enter Last Name" 
                  
                  value={ vet.lastName }
                  valid={ this.state.validate.inputState === 'has-success' }
                  invalid={ this.state.validate.inputState === 'has-danger' }
                  onChange={ (e) => {
                              
                              this.handleChange(e)
                  } }
                  />
                </FormGroup>
               
              
                
                <FormGroup>
                  <Label for="specialties">Select Specialties</Label>
                  <Input 
                  type="select"
                
                  name="selectedSpecialties" id="selectedSpecialties"
                 
                  multiple={true} 
                
               
                 onChange={ (e) => {
                              this.getSelectValues(e)
                              this.handleChange(e)
                  } }
                  
                  >
                 
                  {data = specialties.map(s => 
                 
                  <option value={s.id}>{s.name}</option>
                  
                  )}
                
                  
                  </Input>
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            
            </div>
        );
      }
  }
                  
 
               