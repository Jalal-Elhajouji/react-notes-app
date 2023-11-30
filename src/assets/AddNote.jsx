import { React, useState } from 'react';

const AddNote = ({ handleAddNotes }) => {
    const [noteText, setNoteText] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleSave = () => {
        handleAddNotes(noteText);
    };
    return (
        <div className="note add">
            <textarea
                rows="8"
                cols="10"
                placeholder="Add new note ..."
                value={noteText}
                onChange={handleChange}
            >
            </textarea>

            <div className="note-footer">
                <small>200 remaining</small>
                <button className="save" onClick={handleSave}>Save</button>
            </div>

        </div>
    );
};

export default AddNote;