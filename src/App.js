import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./Components/NotesList";


const App = () => {
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
return(
  <div className="container">
    <NotesList notes={notes}/>
  </div>
)

}

export default App;