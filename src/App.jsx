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
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const [searchText, setSearchText] = useState('');

  return (
    <>
      <div className="container">
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}

          handleAddNotes={addNote}
          handleDeleteNotes={deleteNote}
        />
      </div>
    </>
  )
}

export default App
