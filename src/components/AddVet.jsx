import React from 'react';

import { Button, 
         Form, 
         FormGroup, 
         Label, 
         Input
        
} from 'reactstrap';

export default class AddEditVet extends React.Component {
    
    
    
    constructor(props) {   super(props);
       
          this.state = {
          
           firstName: '',
           lastName: '',
           specialties: [],
           selectedSpecialties: [],
           selectedIds:[],
           validate: {
            inputState: '',
            
          },
        }
          this.handleChange = this.handleChange.bind(this);
          
      }
    
   
   
        
    async componentDidMount() {
        const response = await fetch('/petclinic/api/specialties');
        const body = await response.json();
        this.setState({ specialties: body});
            
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
        
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(this.state.selectedIds)
        var json = JSON.stringify({
                "id":0,
                "firstName": data.get("firstName"),
                "lastName": data.get("lastName"),
                "specialties": this.state.selectedIds
                                
                              
         })
        console.log(json)
     
        fetch('/petclinic/api/vets', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                Accept: 'application/json',
              }),
            body: json,
            })
        
      }
    
    
      render() {
         
          var data =[]
         
         
          const {firstName, lastName, specialties, selectedId, selectedSpecialties} = this.state;
 
       
        return (
            <div>
              <Form onSubmit={ (e) => this.submitForm(e) } method='POST'>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input type="firstName" name="firstName" id="firstName" placeholder="Enter First Name" 
                  
                  value={ firstName }
                  valid={ this.state.validate.inputState === 'has-success' }
                  invalid={ this.state.validate.inputState === 'has-danger' }
                  onChange={ (e) => {
                              this.validateInput(e)
                              this.handleChange(e)
                  } }
                  
                  />
                </FormGroup>  
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input type="lastName" name="lastName" id="lastName" placeholder="Enter Last Name" 
                  
                  value={ lastName }
                  valid={ this.state.validate.inputState === 'has-success' }
                  invalid={ this.state.validate.inputState === 'has-danger' }
                  onChange={ (e) => {
                              this.validateInput(e)
                              this.handleChange(e)
                  } }
                  />
                </FormGroup>
               
              
                
                <FormGroup>
                  <Label for="specialties">Select Specialties</Label>
                  <Input 
                  type="select"
                
                  name="selectedSpecialties" id="selectedSpecialties"
                 
                  multiple
                  
               
                 onChange={ (e) => {
                              this.getSelectValues(e)
                              this.handleChange(e)
                  } }
                  
                  >
                 
                  {data = specialties.map(s => 
                 
                  <option value={s.id}>{s.name}</option>
                  
                  )}
                 {data}
                  
                  </Input>
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            
            </div>
        );
      }
  }
                  
 
               