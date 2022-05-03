/**
 * /*
 *
 * @format
 */

import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
	state = {
		latitude: null,
		longitude: null,
		temp: null,
		locationName: null,
	};
	//get the current location in martix method
	componentDidMount() {
		if (navigator.geolocation) {
			this.getPostions().then((position) => {
				console.log(position.coords.latitude);

				this.getWeather(
					position.coords.latitude,
					position.coords.longitude
				);
			});
		}
	}
	// updated the current position
	getPostions = () => {
		return new Promise(function (resolve, reject) {
			navigator.geolocation.getCurrentPosition(
				resolve,
				reject
			);
		});
	};

	getWeather = async (latitude, longitude) => {
		const api = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=0d95db007e0565eafe58bb7e7e0f55a1`
		);
		const data = await api.json();
		console.log(data);
		this.setState({
			temp: Math.round(data.main.temp),
			locationName: data.name,
		});
	};

	render() {
		return (
			<React.Fragment>
				<div className='col-8 d-flex justify-content-center'>
					<div className='col-6 app-bg'>
						<div className='col-12'>
							<h2 className='text-white'>
								Jaffna
							</h2>
							<p2 className='text-white'>
								IN
							</p2>
						</div>
						<div className='col-12 mt-auto'>
							<h2 className='text-white'>
								20:00
							</h2>
							<p2 className='text-white'>
								sunday,january,
								31,
								2021
							</p2>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
