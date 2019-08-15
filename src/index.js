import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import App from './App';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

class Repaso extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			colors: ["#0d47a1", "#00796b", "#ff9100"]
		}
	}

	componentWillMount(){
		axios.get(`http://api.noopschallenge.com/hexbot?count=5`)
	      .then(res => {
	        const data = res.data.colors;
	        this.setState({colors: data});
	        console.log(data);
	      });
	}

	render(){
		return(
			<div id="main">
				<h3>Colores recomendados del día: </h3>
				<div id="content">
					{/*Para valores hardcodeados solo usar color={color}; para la api usar color={color.value} */}
					{this.state.colors.map((color, key)=> <Card key={key} num={key} color={color.value} />)}
				</div>
			</div>

		);
	}
}

class Card extends React.Component{
	render(){
		return(
			<div className="card" style={{background: this.props.color}}>
				<h4>Color {this.props.num}: {this.props.color}</h4>			
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
