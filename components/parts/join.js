var React = require('react');
var ReactDom = require('react-dom');


var Join = React.createClass({
	join() {
		
		var memberName = this.refs.name.value
		// var memberName = ReactDom.findDOMNode(this.refs.name).value.trim();

		console.log(memberName);
	},
	render() {
		return (
			<form action="javascript:void(0)" onSubmit={this.join}>
				<label>Full Name</label>
				<input  ref="name"
				className="form-control"
				placeholder="enter your full name..."
				required />
				<button className="btn btn-primary">Join</button>
			</form>
			);
	}
});

module.exports = Join;