import React, { Component } from 'react';

class ToDoList extends Component {
  
    constructor() {
        super()
        this.state = {
          item: "",
          toDoList: []
        }
        this.handleInput= this.handleInput.bind(this);
        this.addItem= this.addItem.bind(this);
        this.deleteItem= this.deleteItem.bind(this);// binding function with state
    }

    handleInput = e => {
        const itemText = e.target.value
        //console.log(itemText)
        this.setState({
            item:itemText
         })
    }
    addItem = e => {
        const newItem = this.state.item
        const itemsList = this.state.toDoList
        itemsList.push(newItem);
        this.setState({
            toDoList:itemsList,
            item: ""
         })
       // console.log(this.state.toDoList) 
    }
    deleteItem = e =>{
      const id = e.target.id;
      const itemsList = this.state.toDoList
      itemsList.splice(id,1) //deleting wrt ID
      this.setState({
        toDoList:itemsList,
        item: ""
      })
      console.log(id)
    }  
    render() {
        const userList = this.state.toDoList.map((e,i)=>
            <li key={i}>{e} <button 
            type="button"
            className="btn btn-danger"
            onClick={this.deleteItem} 
            id={i}>X</button>
            </li>
        )
        return (
          <div className="container-fluid">
            <div className="header">
                <input
                  placeholder="Add Items"
                  value={this.state.item}
                  onChange={this.handleInput}
                />
                <button onClick={this.addItem} type="submit"> Add Task </button>
                
                <ul>
                    {userList}
                </ul> 
            </div>
          </div>
        );
      }
}

export default ToDoList ;