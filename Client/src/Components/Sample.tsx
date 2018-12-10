import * as React from 'react';

export class SampleComponent extends React.Component<{}, {}> {
	render() {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
					width: '100vw'
				}}
			>
				<h1>React App</h1>
			</div>
		);
	}
}
