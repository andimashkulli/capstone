import React, {useState} from 'react'
import {signInAUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase'
import FormInput from '../form-input/form-input';
import './sign-in.scss'
import Button from '../button/button';

import 
{signInWithGooglePopUp, 
 } from '../../utils/firebase/firebase'
const defaultFormFields = {
  email: '',

  password:''

}


function SignIn() {
  const [formFields,setFormFields] = useState(defaultFormFields);
  const {email,password} = formFields;
  
  

  const resetFormSubmit = () =>{
    setFormFields(defaultFormFields);
  }
const handleSubmit = async (event) => {
  event.preventDefault()
 
  try{
 const {user} = await signInAUserWithEmailAndPassword(email,password);
 console.log(user) 

resetFormSubmit();
  }
 
  catch(error) {
    switch(error.code) {
      case 'auth/wrong-password':
      alert("Wrong password. Please try again")
      break;
      case 'auth/user-not-found':
        alert("User not found. Please try another account")
        break;
        default:console.log(error);
        

    }
   
    
  }

}

const signInWithGoogleAuth = async () => {
  await signInWithGooglePopUp();

    }

  const handleChange = (event) => {
    const {name,value} = event.target
    
    setFormFields({...formFields, [name]:value})
  }

  return (
    <div className='sign-in-container'>
         <h2>Already have an account?</h2>
        <span>Sign in with your Email and Password</span>
        <form onSubmit={handleSubmit}>
         
          <FormInput label="Email" type="email" required  onChange={handleChange} name="email" value={email} />
          <FormInput label="Password" type="password" required  onChange={handleChange} name="password" value={password} />
          <div className='buttons-container'>
         <Button type="submit">Sign In</Button>
         <Button type="button" onClick={signInWithGoogleAuth} buttonType="google">Google Sign in</Button>
         </div>
        </form>
    </div>

  )
}

export default SignIn