var React = require('react');
var Display = require('./parts/display');
var Join = require('./parts/join')

var Audience = React.createClass({
	render() {

		return (
			<div>
				<Display if={this.props.status === 'connected'}>
					<h1>Join in the session</h1>
					<Join />
				</Display>


			</div>
			);
	}
});

module.exports = Audience;