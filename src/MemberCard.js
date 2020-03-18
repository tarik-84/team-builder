import React from "react";

const MemberCard = props => {
   
  return (
    <div>
      {props.member.map(member => (
        <div key={member.id}>
          <h2>{member.name}</h2>
          <h3>{member.email}</h3>
          <h4>{member.role}</h4>
        </div>
       ))}
    </div>
  );
};

export default MemberCard;
