import "./Notes.scss";
import React, { useState, useEffect } from "react";

import { useTranslation } from 'react-i18next';

// Components
import Base from "../utils/base/Base";
import Note from "./note/Note";

import Data from "./Data"; 

const Body = () => {
    const { t } = useTranslation();

    const [notes, setNotes] = useState(Data);

    useEffect(() => {
        console.log(notes);
    }, [notes]);

    // For forms

    // ~ Add ~
    const [addForm, setAddForm] = useState(false);
    const [newNote, setNewNote] = useState({
        course: "",
        date: "",
        color: "",
        content: "",
        duedate: ""
    });

    const handleAddClick = () => {
        setAddForm(true);
    }

    const handleAddChange = (e) => {
        setNewNote({
            ...newNote,
            [e.target.name]: e.target.value
        });
    }

    const handleAddSubmit = (e) => {
        // Add new note to the notes
        setNotes([...notes, newNote]);
        setAddForm(false);
    }

    return (
        <div className="ronald-notes">

            {/* Forms */}
            {addForm && (
                <div className="form-overlay">

                    <div className="form">
                        <div className="input-container">
                            <label htmlFor="course">{t('Course')}</label>
                            <input onChange={handleAddChange} type="text" name="course" id="course" className="input"/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="date">{t('Date')}</label>
                            <input onChange={handleAddChange} type="text" name="date" id="date" className="input"/>
                        </div>
                        <div className="input-container">
                            {/* Force to pick from: #96FFFF, #96B3FF, #96FFCD */}
                            {/* <label htmlFor="color">Color</label> */}
                            <label htmlFor="color">{t('Color')}</label>
                            <select onChange={handleAddChange} name="color" id="color" className="input">
                                <option value="#96FFFF">#96FFFF</option>
                                <option value="#96B3FF">#96B3FF</option>
                                <option value="#96FFCD">#96FFCD</option>
                            </select>
                        </div>
                        <div className="input-container">
                            {/* <label htmlFor="content">Content</label> */}
                            <label htmlFor="content">{t('Content')}</label>
                            <input onChange={handleAddChange} type="text" name="content" id="content" className="input"/>
                        </div>
                        <div className="input-container">
                            {/* <label htmlFor="duedate">Due date</label> */}
                            <label htmlFor="duedate">{t('Due date')}</label>
                            <input onChange={handleAddChange} type="text" name="duedate" id="duedate" className="input"/>
                        </div>
                        <div className="buttons-container">
                            {/* <button onClick={handleAddSubmit} className="button">Add</button> */}
                            <button onClick={handleAddSubmit} className="button">{t('Add')}</button>
                            {/* <button onClick={() => setAddForm(false)} className="button">Cancel</button> */}
                            <button onClick={() => setAddForm(false)} className="button">{t('Cancel')}</button>
                        </div>
                    </div>

                </div>
                
            )}

            {/* <div className="title">My notes</div> */}
            <div className="title">{t('My notes')}</div>

            <div className="buttons-container">

                {/* <button onClick={handleAddClick} className="button">Add</button> */}
                <button onClick={handleAddClick} className="button">{t('Add')}</button>

            </div>

            <div className="notes-container">

                <div className="second-container">

                    {notes.map((note, index) => (
                        <Note key={index} note={note} className="note"></Note>
                    ))}  

                </div>

            </div>

        </div>
    );

}

const Notes = () => {
    return (
        <Base children={<Body></Body>}></Base>
    );
}

export default Notes;