import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './assets/NotesList';
import Search from './assets/Search';
import Header from './assets/Header';

function App() {

  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

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
    if (window.confirm('Are you sure you want to delete this note?')) {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
    }
  }

  return (
    <>
      <div className={`${darkMode && 'dark-mode'}`}>
        <Header handleDarkMode={setDarkMode} />
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
      </div>
    </>
  )
}

export default App
