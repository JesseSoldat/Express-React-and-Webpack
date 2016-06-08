var React = require('react');

var Audience = React.createClass({
	render() {

		return (
			<div>
			<h1>Audience</h1>
			<h4>{this.props.title}</h4>
			</div>
			);
	}
});

module.exports = Audience;