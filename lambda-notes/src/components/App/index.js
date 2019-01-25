import React from "react";
import { BrowserRouter as Router, 
  Route,
  Switch
} from "react-router-dom";
import NoteList from "../NoteList";
import SideBar from "../SideBar";
import Form from "../Form";
import "./style.css";


function App() {
    return (
      <Router>
        <div className="App">
            <SideBar />
                <Switch>
                    <Route exact path="/" component={NoteList} />
                    <Route exact path="/notes/add" component={Form} />
                </Switch>
        </div>
      </Router>
  );
}

export default App;