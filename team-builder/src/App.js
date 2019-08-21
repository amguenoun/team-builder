import React, { useState } from 'react';
import './App.css';

import teamData from "./teamData"

function App() {
  const [teamList, setTeamList] = useState(teamData);
  console.log(teamList);
  return (
    <div className="App">
      <header className="App-header">
        Hello
      </header>
    </div>
  );
}

export default App;
