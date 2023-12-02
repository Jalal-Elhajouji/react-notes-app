import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './assets/NotesList';
import Search from './assets/Search';


function App() {


  const [notes, setNotes] = useState([]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
      const newNotes = notes.filter((note)=>note.id !== id);
      setNotes(newNotes);
  }



  return (
    <>
      <div className="container">
        <Search />
        <NotesList 
        notes={notes} 
        handleAddNotes={addNote} 
        handleDeleteNotes={deleteNote}
        />
      </div>
    </>
  )
}

export default App
