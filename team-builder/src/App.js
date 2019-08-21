import React, { useState } from 'react';
import './App.css';

import teamData from "./teamData"
import TeamHeader from "./components/TeamHeader";
import TeamList from "./components/TeamList";
import TeamForm from "./components/TeamForm";

function App() {
  const [teamList, setTeamList] = useState(teamData);
  const [memberToEdit, setMemberToEdit] = useState(undefined);

  const addTeamMember = (member) => {
    setTeamList([...teamList, member])
  };

  const handleMemberEdit = (member) => {
    setMemberToEdit(member);
  }
  console.log(memberToEdit);
  return (
    <div className="App">
      <TeamHeader />
      <TeamForm addTeamMember={addTeamMember} memberToEdit={memberToEdit} />
      <TeamList teamList={teamList} handleMemberEdit={handleMemberEdit} />
    </div>
  );
}

export default App;
