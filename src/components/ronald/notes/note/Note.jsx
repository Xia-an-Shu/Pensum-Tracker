import "./Note.scss";
import React from "react";

const Note = ({ note }) => {

    const Clock = require("./clock.svg").ReactComponent;

    return (
        <div className="ronald-note" style={{backgroundColor: note.color}}>
            
            <div className="date">{note.date}</div>

            <div className="title">{note.course}</div>

            <div className="divider-line"></div>

            <div className="content">{note.content}</div>

            <div className="due-date">
                <Clock className="clock"/>
                <div className="date">{note.duedate}</div>
            </div>

        </div>
    );
}

export default Note;