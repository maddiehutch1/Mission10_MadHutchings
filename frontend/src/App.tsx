// Madison Hutchings
// Mission 10 Assignment

import React from "react";
import "./App.css";
import Header from "./Header";
import BowlerList from "./Bowler/BowlerList";

// the App that runs the show... uses Header.tsx and BowlerList.tsx as views (which connect to the backend .NET data)
function App() {
  return (
    <div className="App">
      <Header title="Bowler Competition Roster" />
      <BowlerList />
    </div>
  );
}

export default App;
