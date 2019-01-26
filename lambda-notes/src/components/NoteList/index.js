import React from "react";
import { connect } from "react-redux";
import { 
    getNotes, 
    // getNote, 
    addNote, 
    // deleteNote 
} from "../../store/actions";
import Note from "../Note";
import "./style.css";

class NoteList extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                tags: [],
                title: "",
                textBody: "",
            }
        }
    
    componentDidMount() {
        this.props.getNotes();
    }

    render(){
        return(
            <div className="notelist">
                {this.props.loading ? (
                    <h3 className="loading-text">Loading Notes...</h3>
                ) : (
                <div className="App-intro">
                    <h2 className="notelist-header">Your Notes:</h2>
                    <ul>
                        {this.props.notes.map((note, index) => {
                            return (
                            <div key={index}>
                                <h2> {note.title} </h2>
                                <p> {note.textBody} </p>
                            </div>
                            );
                        })}
                    </ul>
                </div>
                )}
                {this.props.error !== "" ? <h4>{this.props.error}</h4> : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        error: state.error,
        loading: state.loading,
    }
};

export default connect(mapStateToProps, { getNotes, addNote, } )(NoteList);