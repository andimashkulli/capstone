import React, {useState} from 'react'
import {userAuthWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase'
import FormInput from '../form-input/form-input';
import './sign-up.styles.scss'
import Button from '../button/button';

const defaultFormFields = {
  displayName: '',
  email: '',
  password:'',
  confirmPassword: ''
}


function SignUp() {
  const [formFields,setFormFields] = useState(defaultFormFields);
  const {displayName,email,password,confirmPassword} = formFields;

  const resetFormSubmit = () =>{
    setFormFields(defaultFormFields);
  }
const handleSubmit = async (event) => {
  event.preventDefault()
  if(password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }
  try{
    const {user} = await userAuthWithEmailAndPassword(email,password);
   
    await createUserDocumentFromAuth(user,{displayName})

resetFormSubmit();

  }
  catch(error) {

    switch(error.code) {
      case 'auth/email-already-in-use':
        alert("Email already in use. Please try a different Email")
      break;
      case "auth/weak-password":
        alert("Your password should be at least 8 Characters!")
        break;
        default:console.log(error);
        

    }
  
  }

}

  const handleChange = (event) => {
    const {name,value} = event.target
    
    setFormFields({...formFields, [name]:value})
  }

  return (
    <div className='sign-up-container'>
         <h2>Don't have an account?</h2>
        <span>Sign up with Email and Password</span>
        <form onSubmit={handleSubmit}>
          <FormInput label="Display Name" type="text" required  onChange={handleChange} name="displayName" value={displayName}/>
          <FormInput label="Email" type="email" required  onChange={handleChange} name="email" value={email} />
          <FormInput label="Password" type="password" required  onChange={handleChange} name="password" value={password} />
          <FormInput label="Confirm Password" type="password" required  onChange={handleChange} name="confirmPassword" value={confirmPassword} />
         <Button type="submit" buttonType="invert">Sign Up</Button>
        </form>
    </div>

  )
}

export default SignUp