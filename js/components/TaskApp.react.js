/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var TaskStore = require('../stores/TaskStore');
var Task = require('./Task.react');
var TaskActions = require('../actions/TaskActions');

var _ = require('underscore');

var TaskApp = React.createClass({
  mixins: [Reflux.ListenerMixin],

  getInitialState: function() {
    return { tasks: TaskStore.getAll() };
  },

  componentDidMount: function() {
    // TaskStore.addChangeListener(this._onChange);
    this.listenTo(TaskStore, this._onChange);
    TaskActions.addTask({ id: Date.now(), subject: 'Awesome!!!' });
  },

  componentWillUnmount: function() {
    // TaskStore.removeChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {
    var tasks = [];
    _.each(this.state.tasks, function(task) {
      tasks.push(<Task key={task.id} task={task} />);
    });
    return (
      <div className="container-fluid">
        {tasks}
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the TaskStore
   */
  _onChange: function(tasks) {
    this.setState({ tasks: tasks });
  }

});

module.exports = TaskApp;
