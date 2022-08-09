import React from 'react'

export const NoteForm = (props) => {
    const { note = { title: '', text: '' } } = props

    const onTitleChange = (val)=>{
        console.log("val", val)
        props.onChange({...note, title: val.target.value})
    }

    const onTextChange = (val)=>{
        props.onChange({...note, text: val.target.value})

    }

    return <form>
        <div className="form-group">
            <label>Title:</label>
            <input
                className="form-control"
                data-testid="input-title"
                name="title"
                value={note?.title}
                onChange={onTitleChange}
            />
        </div>
        <div className="form-group">
            <label>Note:</label>
            <textarea
                className="form-control"
                data-testid="input-text"
                name="text"
                value={note?.text}
                onChange={onTextChange}
            />
        </div>
        <div className="form-group">
            <input
                type="button"
                data-testid="cancel-note"
                className="btn btn-default pull-right"
                value="Cancel"
                onClick={props.onCancel}
            />
            <input
                type="submit"
                data-testid="save-note"
                className="btn btn-default pull-right"
                value="Save"
                onClick={(e)=>{
                    e.preventDefault()
                    props.onSubmit(note)}}
            />
        </div>
    </form>
}
