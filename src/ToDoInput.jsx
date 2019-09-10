import React from 'react';

class ToDoInput extends React.Component {                       
    constructor(props){
        super(props)
        this.state = {
            userInputItem : '',
            priority: 0,
            id: 0,
            editEnabled: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this)
    }

    handleChange(event){                                    // updates any changes
        this.setState({
            [event.target.name]: event.target.value         
        })
    }
                                                                                     
    handleAddItem(){                                        // pushes state to parent component
        var toDo = {                                        
           title: this.state.userInputItem,
           isCompleted: false,
           id: this.state.id,
           priority: this.state.priority,
           editEnabled: false,
        }
        console.log(toDo);

        this.setState({
            userInputItem: '',
            priority: this.state.priority,
            id: this.state.id + 1,
        })
        this.props.pushToArray(toDo)
    }

    render(){
        
        return( 
          <div>                   
                <p>I want to...</p>                                         
                <textarea className = 'create-todo-text' name = 'userInputItem' value = {this.state.userInputItem} onChange = {this.handleChange}/>
                
                <p>How much of a priority is this?</p>

                <select className = 'create-todo-priority' name = 'priority' value = {this.state.priority} onChange = {this.handleChange}>
                    <option value = '0'>-- Select a Priority --</option>    
                    <option value = '1'>Top Priority</option>
                    <option value = '2'>Mid Priority</option>
                    <option value = '3'>Low Priority</option>
                </select>

                <button className = 'create-todo' onClick={this.handleAddItem}>Add</button> 
         </div>
        )
    }
}

export default ToDoInput 