import React, { Component } from 'react';

class Voting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			voteObject: [
				{ thumbsUp: '👍', votes: 0 },
				{ thumbsDown: '👎', votes: 0 },
			],
		};
	}

	handleVoting(i) {
		let newVoteCounting = [this.state.voteObject];
		newVoteCounting[i].votes++;
		function votingStatus(array, i, blank) {
			let count = array[i];
			array[i] = array[blank];
			array[blank] = count;
		}
		this.setState({ votes: newVoteCounting });
	}
	render() {
		return (
			<div>
				<span>
					{this.state.votes.map((votes, i) => (
						<div key={i}>{votesObject.votes}</div>
                        <div onClick={this.handleVoting.bind(this, i)}>{votesObject.thumbsUp}</div>
					))};
				</span>
			</div>
		);
	}
}

export default Voting;
