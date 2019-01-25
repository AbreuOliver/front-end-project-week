import React from "react";
import NoteList from "../NoteList";
import SideBar from "../SideBar";
import "./style.css";


function App() {
    return (
      <div className="App">
        <SideBar />
        <NoteList />
      </div>
  );
}

export default App;