import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Vets from './Vets'
import Owners from './Owners'
import AddVet from './AddVet'
import EditVet from './EditVet'
import ParentSchedule from './ParentSchedule'

// route exact when the pathname is exactly the string "/"
const Main = () => (
		
  <main>
 
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/vets' component={Vets}/>  
      <Route exact path='/owners' component={Owners}/>   
      <Route exact path='/mainscheduler' component={ParentSchedule}/>   
      		 
      <Route exact path='/addvet' render={(props) => <AddVet {...props}  />}/>
    
      
      
      <Route exact path='/editvet' render={(props) => <EditVet {...props}  />}/>
      
      
      </Switch>
    
  </main>
)

export default Main