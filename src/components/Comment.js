import React, { Component } from 'react';
import VoteUp from './VoteUp';
import VoteDown from './VoteDown';
import EditComment from './EditComment';
import blankProfile from './images/blankProfile.png';

class Comment extends Component {
	render() {
		return (
			<article className="media commentBox">
				<figure className="media-left">
					<p className="image is-64x64">
						<img src={blankProfile} alt="Avatar" />
					</p>
					<strong>{this.props.comment.name}</strong>
				</figure>
				<div className="media-content">
					<div className="content">
						<strong>{this.props.comment.title}</strong>

						<p>{this.props.comment.comment}</p>
						<EditComment edit={this.props.comment.comment} newSubmit={this.props.submit} />
					</div>
					<p className="row">
						<span className="col-1">
							<VoteDown />
						</span>
						<span className="col-1">
							<VoteUp />
						</span>
					</p>
				</div>
			</article>
		);
	}
}

export default Comment;
