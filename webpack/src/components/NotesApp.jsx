import React, { Component } from 'react';
import NotesGrid from './NotesGrid.jsx';
import NoteEditor from './NoteEditor.jsx';

export default class NotesApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: []
		};

		this.handleNoteAdd = this.handleNoteAdd.bind(this);
		this.handleNoteDelete = this.handleNoteDelete.bind(this);
	}

	componentDidMount() {
		const savedNotes = JSON.parse(localStorage.getItem('notes'));

		if (savedNotes) {
			this.setState({ notes: savedNotes });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.notes != this.state.notes) {
			this.saveToLocalStorage();
		}
	}

	handleNoteAdd(newNote) {
		this.setState({
			notes: [newNote, ...this.state.notes]
		});
	}

	handleNoteDelete(noteId) {
		this.setState({
			notes: this.state.notes.filter(note => note.id != noteId)
		});
	}

	saveToLocalStorage() {
		const notes = JSON.stringify(this.state.notes);

		localStorage.setItem('notes', notes);
	}

	render() {
		return (
			<div className="d-flex flex-column justify-content-center align-items-center">
				<h1 className="title">NotesApp</h1>

				<NoteEditor onNoteAdd={this.handleNoteAdd}/>
				<NotesGrid 
					notes={this.state.notes} 
					onNoteDelete={this.handleNoteDelete} 
				/>
			</div>
		)
	}

}