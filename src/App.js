import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

/*function App() {
 const [number,setNumber] = useState(0);
  return (
    <div className="App">
      <p>{number}</p>
        <button onClick={() => setNumber(number + 1)}>Add</button>
      <button onClick={() => setNumber(0)}>Reset</button>
    </div>
  );
}*/

/*class App extends React.Component {
  constructor(){
    super();
    this.state = {number : 0};
  }

  addNumber = () => {
    this.setState({number : this.state.number + 1})
  }
  resetNumber = () => {
    this.setState({number : 0})
  }

  render(){
    return (
      <div className="App">
        <p >{this.state.number}</p>
        <button onClick={this.addNumber}>Add</button>
        <button onClick={this.resetNumber}>Reset</button>
      </div>
    )
  }
}*/
function App(){
  const [newTitle,setNewTitle] = useState("");
  const [newDesc,setNewDesc] = useState("");
  const [items,setItems] = useState([]);
  const [finished,setFinished] = useState([]);

  function addItem(){

    if(!newTitle){
      alert("Enter a todo title");
      return;
    }
    if(!newDesc){
      alert("Enter a todo desc");
      return;
    }

    const item = {
      title: newTitle,
      desc: newDesc
    }; 
    setItems(oldList => [...oldList,item]);
    setNewTitle("");
    setNewDesc("");
  }

  function finishWork(title){
    const newFinished = items.filter(item => item.title == title);
    const newArray = items.filter(item => item.title !== title);
    setItems(newArray);
    const finishedItem = {
      title: newFinished[0].title,
      desc: newFinished[0].desc
    }
    setFinished(oldList => [...oldList,finishedItem]);
  }


  return(
    <div className="App">
      <h1>Todo List App</h1>
      <div className="add">
        <div className="inputing">
        <input type={'text'} 
          placeholder="Put a Title here..." 
          value={newTitle}
          onChange= {e => setNewTitle(e.target.value)}
          className="titre"/>
          <br/>
          <input type={'text'} 
          placeholder="Put a desc here..." 
          value={newDesc}
          onChange= {e => setNewDesc(e.target.value)}
          className="desc"/>
        </div>
        <button onClick={addItem} >Add Work</button>
      </div>
      <div className="work">
      <div className="todo">
        <h1>To-Do</h1>
        <hr></hr>
        <ul>
          {items.map(item => {
            return(
              <li key={item.title} className="listing">
                <p> <h4> Title : </h4> {item.title}</p>
                <p> <h4> Desc : </h4> {item.desc}</p>
                <input type={'checkbox'} onClick={() => {finishWork(item.title)}}/>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="done">
        <h1>Done</h1>
        <hr></hr>
        <ul>
          {finished.map(e => {
            return(
              <li key={e.title} className="listing">
                <p> <h4> Title : </h4> {e.title}</p>
                <p> <h4> Desc : </h4> {e.desc}</p>
              </li>
            )
          })}
        </ul>
      </div>
      </div>
    </div>
  );
}

export default App;
