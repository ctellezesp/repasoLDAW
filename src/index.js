import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

class Repaso extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			colors: ["#FFFFFF", "#000000", "#555555"]
		}
	}

	render(){
		return(
			<div id="main">
				{this.state.colors.forEach(color => {
					return <Card color={color} />
				})}
			</div>

		);
	}
}

class Card extends React.Component{
	render(){
		return(
			<div className="card">
				<h4 className="name-color">Color Disponble: {this.props.color}</h4>			
			</div>
		);
	}
}

ReactDOM.render(
	<Repaso />,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
