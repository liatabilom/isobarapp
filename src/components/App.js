import React, { Component } from 'react';
import axios from './axios';
import CommentBox from './CommentBox';
import Comments from './Comments';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			comments: [],
		};
	}

	getApi = () => {};

	componentDidMount() {}

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
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default App;
