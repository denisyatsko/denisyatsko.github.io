import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

export default class Note extends Component {
	constructor() {
		super();

		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete() {
		this.props.onDelete(this.props.id);
	}

	render() {
		const { 
			children,
			color,
			onDelete
		} = this.props;

		return (
			<div 
				className="note-item"
				style={{ backgroundColor: color}}> 
					{children}
					<span 
						className="note-delete" 
						onClick={this.handleDelete}>
						x
					</span>
			</div>
		);
	}
}

Note.propTypes = {
	id: PropTypes.number.isRequired,
	children: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired
};
