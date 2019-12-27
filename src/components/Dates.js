import React, { Component } from 'react';

class dates extends Component {
	currentDate = () => {
		//multiply timestamp to get actual date. still not 100% accurate as timestamp provided by api is wrong.
		//timezone = susbstract 1 hour (3600 secs) from calculation due to summertime.
		let now = new Date().getTime();
		let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		let dayName = days[now.getDay()];

		let dayNumber = now.getDate();

		let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];
		let monthName = months[now.getMonth()];

		let hours = now.getHours();
		let minutes = now.getMinutes();
		if (minutes < 10) {
			minutes = `0${minutes}`;
		}

		return `${dayName}, ${monthName} ${dayNumber} ${hours}:${minutes}`;
	};
	render() {
		return (
			<div>
				<p>{this.currentDate()}</p>
			</div>
		);
	}
}

export default dates;
