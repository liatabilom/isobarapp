import React, { Component } from 'react';

class EditComment extends Component {
	state = '';

	submitComment = event => {
		event.preventDefault();
		this.props.newSubmit(this.state.editedText);
	};

	updateComment = event => {
		this.setState({
			editedText: event.target.elements.comments.value.trim(),
		});
	};

	render() {
		return (
			<div>
				<form
					onSubmit={event => {
						this.submitComment(event);
					}}
				>
					<input
						className="form-control"
						type="text"
						ref="article"
						name="logEntryEdit"
						defaultValue={this.props.edit}
						onChange={event => this.updateComment(event)}
					/>
				</form>
				<form
					onSubmit={event => {
						this.submitComment(event);
					}}
				>
					<input className="btn btn-secondary mt-2 check-button" type="submit" value="Edit" />
				</form>
			</div>
		);
	}
}

export default EditComment;
