import React from 'react'

class Edit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.title,
            priority: this.props.priority
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSave = this.handleSave.bind(this)
    }

    handleChange(event){ 
        this.setState({
            [event.target.name] : event.target.value         
        })
    }

    handleSave(){        
       this.props.pushEdits(this.props.id,this.state.title,this.state.priority)
  }
rt

    render(){
        return(
            <div>
             <p>Description</p>
             <textarea className = 'update-todo-text' name = 'title' value = {this.state.title} onChange = {this.handleChange}/>
             <select className = 'update-todo-priority' name = 'priority' value = {this.state.priority} onChange = {this.handleChange}>
                    <option>-- Select a Priority --</option>    
                    <option value = '1'>low Priority</option>
                    <option value = '2'>Mid Priority</option>
                    <option value = '3'>Top Priority</option>
                </select>
             <button className = 'update-todo' onClick = {this.handleSave}>Save</button>
             </div>
        )
    }
}

export default Edit