import React, { useState } from 'react';

export const Todo = (props) => {
  const {items,setItems,finished,setFinished,newTitle,setNewTitle} = props;

  const addItem = (event) => {
    if(event.key === 'Enter'){
    if(!newTitle){
      alert("Enter a todo title");
      return;
    }

    const item = {
      title: newTitle
    }; 
    setItems(oldList => [...oldList,item]);
    setNewTitle("");
  }
  }

  const finishWork = (title) => {
    const newFinished = items.filter(item => item.title === title);
    const newArray = items.filter(item => item.title !== title);
    setItems(newArray);
    const finishedItem = {
      title: newFinished[0].title
    }
    setFinished(oldList => [...oldList,finishedItem]);
  }

  
  

  return(
    <div data-testid="todo-1" className="todo">
        <h1>Todo List App</h1>
        <hr></hr>
        <div className="inputing">
        <input type={'text'} 
          placeholder="Put a Title here..." 
          value={newTitle}
          onChange= {e => setNewTitle(e.target.value)}
          onKeyDown={addItem}
          className="titre"/>
          <br/>
        </div>
        <ul>
          {items.map(item => {
            return(
              <li key={item.title} className="listing">
                <p> <h4> Title : </h4> {item.title}</p>
                <input type={'checkbox'} onClick={() => {finishWork(item.title)}}/>
              </li>
            )
          })}
        </ul>
      </div>
  )
}
