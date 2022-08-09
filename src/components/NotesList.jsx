import React from 'react'

export const NotesList = ({notes,onSelect, selected }) => {
    const getClassName = (item)=>{
        console.log("getClassName", item, selected);

        if(selected && selected.id == item.id){
            return "list-group-item active"
        }
        return "list-group-item"
    }
    return <div className="list-group">
        {notes.map((note)=>
            <div key={note.id} data-testid="note-item" onClick={()=>onSelect(note)} className={getClassName(note)}>{note.title}</div>
        )}
        {/* <div data-testid="note-item" className="list-group-item active">Active note example</div> */}
        {/* <div data-testid="note-item" className="list-group-item">Inactive note example</div> */}
    </div>
}
