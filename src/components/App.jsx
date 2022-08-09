import React, { useEffect, useState } from 'react'

import { NotesList } from './NotesList'
import { NoteForm } from './NoteForm'

export const App = (props) => {
    const { service } = props

    const [notes, setNotes] = useState([])
    const [selected, setSelected] = useState(null)

    // (!) Get notes from service

    useEffect(()=>{
        service.getNotes().then((res)=>setNotes(res));
    },[])

    // Select new empty note
     function newNote(){
        let note = {};
        setSelected(note);
    }

    // Set note as selected
    function onSelect(note){
        setSelected(notes.find(x=>x.id == note.id))
    }

    // Save note to service
    async function onSubmit(note){
        console.log("onSubmit1")

        await service.saveNote(note);
        let res = await service.getNotes();

        console.log("onSubmit", res)
        
        setNotes(res);
    }

    // Unselect note
    function onCancel(){
        setSelected(null);
    }

    const onChange = (note)=>{
        setSelected(note)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>React notes</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <NotesList notes={notes} selected={selected} onSelect={onSelect} />
                </div>
                <div className="col-md-8">
                    <NoteForm note={selected} onCancel={onCancel} onSubmit={onSubmit} onChange={onChange}/>
                    <div><button onClick={newNote} data-testid="new-note">New Note</button></div>
                </div>
            </div>
        </div>
    )
}
