var Reflux = require('reflux');
var TaskActions = require('../actions/TaskActions');

var TaskStore = Reflux.createStore({

  init: function() {
    this.tasks = [];
    this.listenToMany(TaskActions);
  },

  getAll: function() {
    return this.tasks;
  },

  onAddTask: function(task) {
    console.log(task);
    this.tasks.push(task)
    this.trigger(this.tasks);
  }
});

module.exports = TaskStore;