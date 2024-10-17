import React from 'react'
// import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
// import '@material/web/checkbox/checkbox.js';
import Checkbox from "./index"
const user = () => {
  return (
    <div>
     user 
  
     <label>
  Material 3
  {/* <br /> */}
  {/* <md-checkbox checked></md-checkbox> */}
</label>

<form>
  <md-outlined-text-field label="Email" type="email"
      name="email" required></md-outlined-text-field>
  <label>
    Subscribe
    <md-checkbox name="subscribe"></md-checkbox>
  </label>

  <md-text-button type="reset">Reset</md-text-button>
  <md-outlined-button>Submit</md-outlined-button>
</form>

  {/* <Checkbox checked />
      
      <Button variant="outlined">Back</Button>
     <Button variant="contained">Complete</Button>
    */}
    </div>
  )
}

export default user
