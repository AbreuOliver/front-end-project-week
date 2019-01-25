import React from "react";
import { Link } from "react-router-dom";
import "./style.css"



const SideBar = props => {
    return (
            <div className="sidebar">
                <div>
                    <h1>
                        Lambda
                        <br />
                        Notes
                    </h1>
                </div>
                <div>
                    <Link to="/">
                        <button className="button view">View Your Notes</button>
                    </Link>
                    <Link to="/notes/add">
                        <button className="button create">+ Create New Note</button>
                    </Link>
                </div>
            </div>
    );
};

export default SideBar;