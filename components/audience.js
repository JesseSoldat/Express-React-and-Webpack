var React = require('react');
var Display = require('./parts/display');

var Audience = React.createClass({
	render() {

		return (
			<div>
				<Display if={this.props.status === 'connected'}/>
			</div>
			);
	}
});

module.exports = Audience;