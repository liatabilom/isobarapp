import React, { Component } from 'react';

class CommentBox extends Component {
	addComment = e => {
		e.preventDefault();

		const comment = e.target.elements.comment.value.trim();
		const name = e.target.elements.name.value.trim();

		if (name && comment) {
			const commentObject = { name, comment };

			this.props.handleAddComment(commentObject);

			/*global Ably*/
			const channel = Ably.channels.get('comments');
			channel.publish('add_comment', commentObject, error => {
				if (error) {
					console.log('Unable to publish message; err = ' + error.message);
				}
			});

			e.target.elements.comment.value = '';
			e.target.elements.name.value = '';
		}
	};
	render() {
		return (
			<div>
				<h1 className="title">Kindly leave your thoughts below</h1>
				<form onSubmit={this.addComment} autoComplete="off">
					<div className="field">
						<div className="control">
							<input type="text" className="input" name="name" placeholder="Your name" />
						</div>
					</div>
					<div className="field">
						<div className="control">
							<textarea className="textarea" name="comment" placeholder="Add a comment"></textarea>
						</div>
					</div>
					<div className="field">
						<div className="control">
							<button className="button is-primary">Submit</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default CommentBox;
