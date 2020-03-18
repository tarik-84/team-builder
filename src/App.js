import React, { useState } from 'react';
import './App.css';
import Form from './Form'
import MemberCard from './MemberCard'

function App() {

  const [teamMembers, setTeamMembers] = useState([{
    id:1,
    name:'Tarik Najim',
    email:'real@yahoo.com',
    role:'Full Stack'
  }]);
  const addMemberHandler = member => {

    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeamMembers([...teamMembers, newMember]);
  };
  return (
    <div className="App">
      <h1>Aaron Team Members</h1>
      <Form addMember={addMemberHandler}/>
      <MemberCard member={teamMembers}/>
    </div>
  );
}

export default App;
