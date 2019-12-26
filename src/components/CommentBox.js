import React, { Component } from 'react';
import './CommentBox.css';

class CommentBox extends Component {
	constructor(props) {
		super(props);
	}

	addComment = e => {
		e.preventDefault();

		const comment = e.target.elements.comment.value.trim();
		const name = e.target.elements.name.value.trim();

		if (name && comment) {
			const commentObject = { name, comment };

			this.props.handleAddComment(commentObject);

			/*global Ably*/
			const channel = Ably.channels.get('comments');
			channel.publish('add_comment', commentObject, err => {
				if (err) {
					console.log('Unable to publish message; err = ' + err.message);
				}
			});

			e.target.elements.comment.value = '';
			e.target.elements.name.value = '';
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
											name="name"
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
				<div className="footer">
					<h2></h2>
				</div>
			</div>
		);
	}
}

export default CommentBox;
