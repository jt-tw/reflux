/** @jsx React.DOM */
var React = require('react');

var Task = React.createClass({

	render: function() {
		//var task = this.props.task;

		return (
			<div className="row">
				<div className="col-xs-4">aaa</div>
				<div className="col-xs-8">bbb</div>
			</div>
		);
	}
});

module.exports = Task;