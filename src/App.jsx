import React, { Component } from 'react';

import ToDoInput from './ToDoInput'
import ViewToDo from './ViewToDo'
import Edit from './Edit'

class App extends Component {
  constructor(props){
       super(props)
    this.state = {
      itemsToDo: [], 
                    // userInputItem: '' 
    }
    this.pushToArray = this.pushToArray.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.toggleComplete = this.toggleComplete.bind(this)
    this.pushEdits = this.pushEdits.bind(this)
  }

      // pushed todos into app's state
  pushToArray(newToDo){                   
      var array = this.state.itemsToDo;
      array.push(newToDo)
      this.setState({
        itemsToDo: array,
      })
  }

  pushEdits(id, title, priority){
    this.setState(prevState => {
      const editTodos = prevState.itemsToDo.map(todo =>{
        if (todo.id === id){
          todo.title = title
          todo.priority = priority
          todo.editEnabled = !todo.editEnabled
        }
        return todo
       })
       return{
         itemsToDo: editTodos
       }
     })
  }

         // delete todos
  handleDelete(id){                    
    this.setState({
      itemsToDo: this.state.itemsToDo.filter(elements => elements.id !== id)
  });
}

        // toggle edit boolean 
  handleEdit(id){
   this.setState(prevState => {
     const editTodos = prevState.itemsToDo.map(todo =>{
       if (todo.id === id){
         todo.editEnabled = !todo.editEnabled
       }
       return todo
      })
      return{
        itemsToDo: editTodos
      }
    })
  }

       // toggle's checkox boolean
  toggleComplete(id){                  
    this.setState(prevState => {
      const updatedTodos = prevState.itemsToDo.map(todo => {
          if (todo.id === id) {
              todo.isCompleted = !todo.isCompleted
          }
          return todo
      })
      return {
          itemsToDo: updatedTodos
      }
  })
  }

  render() {
    return (
          <div className='global-container'>
              <h1>Add New To Do</h1>
              <ToDoInput pushToArray = {this.pushToArray} />

              <ViewToDo 
                itemToDo = {this.state.itemsToDo} 
                handleDelete = {this.handleDelete}
                handleEdit = {this.handleEdit} 
                toggleComplete = {this.toggleComplete}
                pushEdits = {this.pushEdits}
              />
          </div> 
      );
    }
  }
  
  export default App;