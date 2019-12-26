import React, { Component } from 'react';
import CommentBox from './CommentBox';
import Comments from './Comments';
import Voting from './Voting';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			comments: [],
		};
	}

	componentDidMount() {
		/*global Ably*/
		const channel = Ably.channels.get('comments');

		channel.attach();
		channel.once('attached', () => {
			channel.history((err, page) => {
				const comments = Array.from(page.items, item => item.data);

				this.setState({ comments });

				channel.subscribe(msg => {
					const commentObject = msg.data;
					this.handleAddComment(commentObject);
				});
			});
		});
	}

	handleAddComment = comment => {
		this.setState(prevState => {
			return {
				comments: prevState.comments.concat(comment),
			};
		});
	};

	render() {
		return (
			<section className="section">
				<div className="container">
					<div className="columns">
						<div className="column is-half is-offset-one-quarter">
							<CommentBox handleAddComment={this.handleAddComment} />
							<Comments comments={this.state.comments} />
							<Voting />
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default App;
