import React, { Component } from 'react';
import Tasklist from './tasklist';
import Addtask from './addtask';
import { library} from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
library.add(far, faCircleXmark)


class App extends Component {
  state = {
    tasks: [
      {task: "Play", id: 1}
    ]
  };

  addtask = (task) => {
    task.id = Math.random() * 10;
    let tasks = [...this.state.tasks, task];
    this.setState({
      tasks
    })
    console.log(tasks)
  }

  deletetask = (id) => {
    let tasks = this.state.tasks.filter((task) => {
      return task.id !== id
    })
    this.setState({
      tasks
    })
    console.log(tasks)
  }

  componentDidMount() {
    console.log('component mounted')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component Updated');
    console.log(prevProps, prevState)
  }

  render() {
    return (
      <div className='container'>
      <h1>Todo List</h1>
      <h3>What do you have to do today?</h3>
      <Addtask Addtask={this.addtask} />
      <Tasklist tasks = {this.state.tasks} deletetask = {this.deletetask}/>
      </div>
    );
  }
}

export default App;