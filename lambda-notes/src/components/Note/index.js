import React from "react";
import "./style.css";

class Note extends React.Component {
    state = {
        isEditing: false,
        tags: [],
        title: "",
        textBody: "",
    };

    get id() {
        return this.props.match.params.id;
    }

    componentDidMount() {
        this.props.getNote(this.id);
    }

    toggleEdit = event => {
        event.preventDefault();
        this.setState({
            isEditing: true,
            title: this.props.note.title,
            content: this.props.note.content
            });
        };

    handleInput = (event) => {
        event.preventDefault();
        this.props.editNote({
            id: this.id,
            title: this.state.title,
            textBody: this.state.textBody
        });
    }
}

export default Note;