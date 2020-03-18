import React, { useState } from 'react';


const Form = props => {
console.log(props)
  const [formState, setFormState] = useState({
    name:'',
    email:'',
    role:''
  });
   
  const changeHandler = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    props.addMember({
      ...formState,
      id: Date.now()
    });

    setFormState({
      name: '',
      email: '',
      role:''
    });
  };


  return (
    <form onSubmit={formSubmitHandler}>
       
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        value={formState.name}
        onChange={changeHandler}
        placeholder='Write Your Name Here'
        />
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          value={formState.email}
          onChange={changeHandler}
          placeholder='Write Your Email Here'
        />
        <label htmlFor='role'>Role</label>
        <input
          type='text'
          name='role'
          value={formState.role}
          onChange={changeHandler}
          placeholder='Write Your Role Here'
        />
        <button type="submit">Create Profile</button>
          
    </form>
  )
}

export default Form;