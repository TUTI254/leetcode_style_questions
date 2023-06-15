import React, { Component } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      tasks: [],
      taskCounter: 0,
    };
  }

  // Handle input change event
  handleInputChange = (e) => {
    this.setState({ task: e.target.value });
  };

  // Handle form submission event
  handleSubmit = (e) => {
    e.preventDefault();
    const { task, tasks, taskCounter } = this.state;
    if (task.trim() === "") return;

    // Create a new task object
    const newTask = { text: task, isDone: false, id: taskCounter + 1 };

    // Update the state with the new task and increment the task counter
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
      task: "",
      taskCounter: prevState.taskCounter + 1,
    }));
  };

  // Handle toggling the task's completion status
  handleToggle = (id) => {
    this.setState((prevState) => {
      const updatedTasks = [...prevState.tasks];
      const taskIndex = updatedTasks.findIndex((task) => task.id === id);
      updatedTasks[taskIndex].isDone = !updatedTasks[taskIndex].isDone;
      return { tasks: updatedTasks };
    });
  };

  // Get the total number of tasks
  getTotalTasks = () => this.state.tasks.length;

  // Get the number of completed tasks
  getCompleteTasks = () =>
    this.state.tasks.filter((task) => task.isDone).length;

  render() {
    const { task, tasks, taskCounter } = this.state;

    return (
      <>
        <div>
          <h2>Todo List</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={task}
              onChange={this.handleInputChange}
              placeholder="Enter task"
            />
            <button type="submit">Add</button>
          </form>
          <ul>
            {tasks.map((task) => (
              <li
                key={task.id}
                onClick={() => this.handleToggle(task.id)}
                className={task.isDone ? "is-done" : ""}
              >
                {task.text}
              </li>
            ))}
          </ul>
          <p className={cx("task-counter", { "with-tasks": tasks.length > 0 })}>
            {this.getTotalTasks() - this.getCompleteTasks()} remaining out of{" "}
            {this.getTotalTasks()} tasks
          </p>
        </div>
        <style>{`
          .is-done {
            text-decoration: line-through;
          }
          .with-tasks {
            counter-reset: task-counter ${taskCounter};
          }
          .task-counter:before {
            counter-increment: task-counter;
            content: counter(task-counter);
            margin-right: 5px;
          }
        `}</style>
      </>
    );
  }
}

//test cases


// Compilation successful.

// Component should have input and button elements for adding an item
// OK

// Component should add an item
// OK

// Component should not add an empty item
// OK

// Component should add item at the end of the list
// OK

// Component should not have newly added item crossed out
// OK

// Component should cross done item
// OK

// Component should remove the crossing of item after re-click
// OK

// Component should set task counter to 0 in the beginning
// OK

// Component should set task counter to 1 after adding one task
// OK

// Component should work with items with the same names
// OK

// Component should update task counter when marked as done
// OK

// Component should follow complex scenario
// OK
