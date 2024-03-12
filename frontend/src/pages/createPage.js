import React, {useState} from 'react';
import {Link} from 'react-router-dom';
const CreatePage = () => {

    let [note, setNote] = useState({title: "", content: "", updated: "", created:""});
    let createNote = async() =>{
    fetch("http://localhost:8000/api/notes/create/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note)})
    }

    let handleSubmit = () =>{
        createNote()
    }

return ( 
    <div className="create">
        <div className='noteHead'>
            <textarea onChange={(e)=>setNote({...note, 'title': e.target.value})} defaultValue={"New Note"}></textarea>
            </div>
            
            <textarea className='noteContent'  onChange={(e)=>{
                setNote({...note, 'content': e.target.value})}} defaultValue={"type here..."}></textarea>

            <button onClick = {handleSubmit}><Link to = "/">Save changes</Link></button>
            </div>
 );
}
 
export default CreatePage;