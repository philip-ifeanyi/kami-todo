import React, { Component } from 'react'

class Addtask extends Component {
  state = {
    task: ''
  }

  handleChange = (e) => {
    this.setState({
      task : e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.Addtask(this.state);
    this.setState({
      task : ""
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" onChange={this.handleChange} value={this.state.task}/>
          <button>Add Task</button>
        </form>
      </div>
    );
  }
}

export default Addtask;