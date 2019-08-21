import React, { useState } from 'react';
import './App.css';

import teamData from "./teamData"
import TeamHeader from "./components/TeamHeader";
import TeamList from "./components/TeamList";
import TeamForm from "./components/TeamForm";

function App() {
  const [teamList, setTeamList] = useState(teamData);

  const addTeamMember = (member) => {
    setTeamList([...teamList, member])
  };

  return (
    <div className="App">
      <TeamHeader />
      <TeamForm addTeamMember={addTeamMember} />
      <TeamList teamList={teamList} />
    </div>
  );
}

export default App;
