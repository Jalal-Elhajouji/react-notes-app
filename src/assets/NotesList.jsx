import Note from "./Note";
import AddNote from './AddNote';

const NotesList = ({ notes, handleAddNotes, handleDeleteNotes }) => {
    return (
        <>
            <div className="notes-list">
                {notes.map((note) => (
                    <Note
                        id={note.id}
                        key={note.id}
                        text={note.text}
                        date={note.date}
                        handleDeleteNotes={handleDeleteNotes}
                    />
                ))}
                <AddNote handleAddNotes={handleAddNotes}/>
            </div>
            
        </>
)};

export default NotesList;
