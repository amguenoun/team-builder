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

  const editMember = (member) => {
    teamList.map(item => {
      if (item.id === member.id) {
        let updatedObject = ({ ...item, ...member });
        item.name = updatedObject.name;
        item.email = updatedObject.email;
        item.role = updatedObject.role;
      }
    });
    setMemberToEdit(undefined);
  }

  return (
    <div className="App">
      <TeamHeader />
      <TeamForm addTeamMember={addTeamMember} memberToEdit={memberToEdit} editMember={editMember} />
      <TeamList teamList={teamList} handleMemberEdit={handleMemberEdit} />
    </div>
  );
}

export default App;
