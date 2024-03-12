import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';

const NotePage = () => {
    const {id} = useParams();
    console.log(id, "hello")
    let [note, setNote] = useState({title: "", content: "", updated: "", created:""});

    let getTime = (note) => {
        return new Date(note.updated).toLocaleDateString();
      }

    let getNote = async() =>{
        console.log("http://localhost:8000/api/notes/"+id+"/")
        let response = await fetch("http://localhost:8000/api/notes/"+id+"/")
        let data = await response.json()
        setNote(data)
        console.log(note)
        console.log(data)
    }

    let updateNote = async() =>{
        fetch("http://localhost:8000/api/notes/"+id+"/update/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note)
        })
    }

    let deleteNote = async() =>{
        fetch("http://localhost:8000/api/notes/"+id+"/delete/", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    let handleSubmit = () =>{
        updateNote()
    }

    let handleDelete = () =>{
        deleteNote()
    }

    useEffect(()=>{
        getNote()
    },[id])

    return ( 
        
        <div className="note">
            
            <div className='noteHead'>
            <h3>{note.title}</h3>
            <div className='noteButtons'>
            <Link to="/"><button onClick={handleSubmit}>Back</button></Link>
            <Link to="/"><button onClick = {handleDelete}>Delete</button></Link>
            </div>
            </div>
            
            
            <p>Last Updated: {getTime(note)}</p>
            <textarea className='noteContent'  onChange={(e)=>{
                setNote({...note, 'content': e.target.value})
                console.log(e.target.value)
                console.log("hello")}} defaultValue={note?.content}></textarea>
                
        </div>
        // <p>hello</p>
     );
}
 
export default NotePage;