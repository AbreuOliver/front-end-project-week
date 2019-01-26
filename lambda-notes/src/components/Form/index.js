import React from "react";
import "./style.css";

const Form = () => {
    return (
        <div className="form-container">
            <div className="newNote-container">
                <h2>
                    Create New Note
                </h2>
                <input 
                    className="note-title"
                    type="text"
                    placeholder="Note Title">
                </input>
                <input
                    className="note-content"
                    type="text"
                    placeholder="Note Content">
                </input>
                <button className="button">
                    Save
                </button>
            </div>
        </div>
    );
}

export default Form;