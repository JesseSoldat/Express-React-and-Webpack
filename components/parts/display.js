var React = require('react');


var Display = React.createClass({
	display(){
		console.log('display');
		if (this.props.if) {
			return <div>SHOW</div>
		} 
		else {
			return <div>HIDE</div>
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