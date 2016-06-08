var React = require('react');


var Display = React.createClass({
	display(){
		// console.log('display');
		if (this.props.if) {
			return <div>{this.props.children}</div>
		} 
		else { 
			return null
		}
	},
	render() {
	return (
		<div>
			<h1>{this.display()}</h1>
		</div>
		);
	}
});

module.exports = Display;