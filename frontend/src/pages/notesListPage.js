import React, {useState, useEffect} from 'react';
import ListItem from '../components/listItem';

const Notes = () => {
    let [notes, setNotes] = useState([]);
    useEffect(()=>{
        getnotes()
    },[])

    let getnotes = async() =>{
        let response = await fetch('http://localhost:8000/api/notes/');
        let data = await response.json();
        setNotes(data);
    }

    return (
        <div className="notes">
            <div className="notes-list">
                {notes.map(note => (
                    <ListItem note={note} key={note.id}/>
                ))}
            </div>
        </div>
      );
}
 
export default Notes;