import React, { Component } from 'react';

class VoteUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			options: [{ text: 'Liked', votes: 0 }],
		};
	}

	handleVoting(i) {
		let newVoteCounting = [...this.state.options];
		newVoteCounting[i].votes++;
		function votingStatus(array, i, blank) {
			let count = array[i];
			array[i] = array[blank];
			array[blank] = count;
		}
		this.setState({ options: newVoteCounting });
	}
	render() {
		return (
			<section>
				{this.state.options.map((options, i) => (
					<div key={i}>
						<div>{options.votes}</div>
						<div onClick={this.handleVoting.bind(this, i)}>👍</div>
					</div>
				))}
			</section>
		);
	}
}

export default VoteUp;
