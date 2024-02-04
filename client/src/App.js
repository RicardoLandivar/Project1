import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./Components/NotesList";


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace with your Express server URL
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  const[notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my first note!",
    date: "11/8/2023",
  },
  {
    id: nanoid(),
    text: "This is my second note!",
    date: "11/9/2023",
  },
  {
    id: nanoid(),
    text: "This is my third note!",
    date: "11/10/2023",
  },
  {
    id: nanoid(),
    text: "This is my fourth note!",
    date: "11/11/2023",
  },
]);

const addNote = (text) => {
const date = new Date();
const newNote = {
  id: nanoid(),
  text: text,
  date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};

const deleteNote = (id) => {
 const newNotes = notes.filter((note)=> note.id !== id);
 setNotes(newNotes);
}

return (
  <div className="container"><h1>Data from Express: {data.message} </h1>
  
    <NotesList 
    notes={notes} 
    handleAddNote={addNote}
    handleDeleteNote={deleteNote} />
  </div>
)

}

export default App;