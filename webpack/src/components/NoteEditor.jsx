import React, { Component } from 'react';

const DEFAULT_COLOR = '#FFCC33';

export default class NoteEditor extends Component {
	constructor() {
		super();

		this.state = {
			text: ''
		};

		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleNoteAdd = this.handleNoteAdd.bind(this);
		this.resetState = this.resetState.bind(this);
	}

	handleTextChange(e) {
		this.setState({
			text: e.target.value
		});
	}

	handleNoteAdd() {
		const newNote = {
			text: this.state.text,
			id: Date.now(),
			color: DEFAULT_COLOR
		}
		
		this.props.onNoteAdd(newNote);	

		this.resetState();	
	}

	resetState() {
		this.setState({
			text: ''
		});
	}

	render() {
		return (
			<div className="notes-editor-wrap"> 
				<textarea
					className="notes-editor"
					rows={6}
					placeholder="Enter your note here..."
					value={this.state.text}
					onChange={this.handleTextChange}
				/>

				{
					this.state.text
					&& <button
							className="notes-add-button"
							onClick={this.handleNoteAdd}>
							Add
						</button>
				}
			</div>
		);
	}
}