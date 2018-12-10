import * as React from 'react';

import axios from 'axios';

import * as SERVICE1_URL from './SERVICE1_URL.json';

const service1URL =
	process.env.NODE_ENV === 'development'
		? SERVICE1_URL.development
		: SERVICE1_URL.production;

interface InnerState {
	service1Response: string;
	service2Response: string;
}

export class SampleComponent extends React.Component<{}, InnerState> {
	constructor(props: {}) {
		super(props);

		this.state = {
			service1Response: `FETCHING ${service1URL}/service1`,
			service2Response: `FETCHING ${service1URL}/service2`
		};
	}

	componentDidMount() {
		axios(`${service1URL}/service1`)
			.then((response: any) =>
				this.setState({ service1Response: response.data })
			)
			.catch((error: any) =>
				this.setState({
					service1Response: `ERROR FETCHING ${service1URL}/service1: ${error}`
				})
			);

		axios(`${service1URL}/service2`)
			.then((response: any) =>
				this.setState({ service2Response: response.data })
			)
			.catch((error: any) =>
				this.setState({
					service2Response: `ERROR FETCHING ${service1URL}/service2: ${error}`
				})
			);
	}

	render() {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
					width: '100vw'
				}}
			>
				<h1>React App</h1>
				<br />
				<h2>SERVICE 1</h2>
				<span>{this.state.service1Response}</span>
				<br />
				<h2>SERVICE 2</h2>
				<span>{this.state.service2Response}</span>
			</div>
		);
	}
}
