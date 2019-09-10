import React, {Component} from 'react'
import Edit from './Edit'

class ViewToDo extends Component {  
    constructor(props){
        super(props)
    }

    handleDelete(id){
        this.props.handleDelete(id)
    }

    handleEdit(id){
        this.props.handleEdit(id)
    }

    toggleComplete(id){
        this.props.toggleComplete(id)
    }

render(){

    return(
        <div>
            <h1>View To Do</h1>  
                <ul>
                {this.props.itemToDo.map(item => {
                    if (item.editEnabled === false)  
                        return(
                            <li key = {item.id} 
                            className = {item.priority == '1' ? 'alert alert-success' : (item.priority === '2' ? 'alert alert-warning': 'alert alert-danger')}
                            style = {{textDecoration: item.isCompleted ? 'line-through' : 'none'}}>

                            <input type='checkbox' onChange={() => this.toggleComplete(item.id)}/>

                            {item.title}

                            <button className = 'edit-todo' onClick={() => this.handleEdit(item.id)}>Edit</button>
                            <button className = 'delete-todo' onClick={() => this.handleDelete(item.id)}>x</button> 
                            </li>
                    )
                     else {
                       return (
                                <Edit
                                  title = {item.title}
                                  priority = {item.priority}
                                  key = {item.id}
                                  id = {item.id}
                                  pushEdits = {this.props.pushEdits}
                                />
                       )
                     }   
             })}
                </ul>
           </div>         
    )
}
}

export default ViewToDo  

