import React, { Component } from 'react';
import Note from './Note.jsx'

export default class NotesGrid extends Component{
	render() {
		const { 
			notes,
			onNoteDelete
		} = this.props;

		return (
			<div className="notes-grid"> 
				{
					notes.map(note =>
						<Note 
							key={note.id} 
							id={note.id}
							text={note.text}
							color={note.color}
							onDelete={onNoteDelete}
						>
							{note.text}
						</Note>
					)
				}
			</div>
		);
	}
}