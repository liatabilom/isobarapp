import React, { Component } from 'react';
import './CommentBox.css';

class CommentBox extends Component {
	addComment = event => {
		event.preventDefault();

		const comment = event.target.elements.comment.value.trim();
		const name = event.target.elements.name.value.trim();
		const title = event.target.elements.title.value.toUpperCase().trim();

		if (name && comment && title) {
			const commentObject = { name, comment, title };

			this.props.handleAddComment(commentObject);

			/*global Ably*/
			const channel = Ably.channels.get('comments');
			channel.publish('add_comment', commentObject, err => {
				if (err) {
					console.log('Unable to publish message; err = ' + err.message);
				}
			});

			event.target.elements.comment.value = '';
			event.target.elements.name.value = '';
			event.target.elements.title.value = '';
		}
	};

	render() {
		return (
			<div>
				<div className="header">
					<header>Lia Martini</header>
				</div>
				<div className="container">
					<div className="row">
						<h2 className="side">
							<form onSubmit={this.addComment}>
								<div className="field">
									<div className="control">
										<label className="label">Don't be shy!</label>
										<input
											type="text"
											className="input"
											name="name"
											placeholder="Write your name here..."
										/>
									</div>
								</div>
								<div className="field">
									<div className="control">
										<input
											type="text"
											className="input"
											name="title"
											placeholder="Give us the best title you have!"
										/>
									</div>
								</div>
								<div className="field">
									<div className="control">
										<textarea
											className="textarea"
											name="comment"
											placeholder="Write your comment here..."
										></textarea>
									</div>
								</div>
								<div className="field">
									<div className="control">
										<button className="button btn-success">Submit</button>
									</div>
								</div>
							</form>
						</h2>
					</div>
					<br />
				</div>
			</div>
		);
	}
}

export default CommentBox;
