import React from 'react'
import './App.css'
import todoList from './todoList.json'


function TodoItem (props) {
  return <p className='card' onClick={() => props.removeTask(props.id)}>{props.content}</p>
}

class TodoList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todoList, // shorthand for todoList:todoList
      hideCompletedItems:false
    }
    this.currentId = 4
  }

  addTask (e) {
    let todoList = this.state.todoList
    todoList.push({ "id": this.currentId, "content": this.refs.taskContent.value, "priority": this.refs.taskPriority.value, "completed": false })
    this.currentId++
    this.setState({todoList})
  }

  removeTask (id) {
    let todoList = this.state.todoList
    todoList = todoList.filter((v) => v.id !== id)
    this.setState({todoList})
  }

  render () {
    return (
      <>
        <label htmlFor='taskContent'>New Task: </label>
        <input type='text' ref='taskContent' />
        <label htmlFor ='taskPriority'> Priority: </label>
        <input type='number' min='1' max='4' ref='taskPriority' />
        &nbsp;
        <input type='button' value='Add Task' onClick={() => this.addTask()} />
        <br/>
        <input ref='hideCompletedItemsCheckbox' type='checkbox' id='hideCompletedItems' 
        value='hideCompletedItems' 
        onChange={(e) => this.setState({ hideCompletedItems: e.target.checked})}/>
        <label htmlFor='hideCompletedItems'>Hide Completed Items</label>
        {((this.state.hideCompletedItems) ? this.state.todoList
          .filter((v) => !v.completed) : this.state.todoList)
          .map((v) => <TodoItem id ={v.id} removeTask={(id) => this.removeTask(id)} key={v.id}
            content={v.content}
            priority={v.priority}
            completed={v.completed} />)}
      </>
    )
  }
}

function App (props) {
  return (
    <TodoList />
  )
}

export default App
