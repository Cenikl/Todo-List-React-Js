import React, { useState } from 'react';
import './App.css';
import { Todo } from './component/todo';
import { Done } from './component/done';

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
  const [items,setItems] = useState([]);
  const [finished,setFinished] = useState([]);

  return(
    <div className="App">
      <div className="work">
      <Todo 
      items={items}
      setItems={setItems}
      finished={finished}
      setFinished={setFinished}
      newTitle={newTitle}
      setNewTitle={setNewTitle}
      />
      <Done
      finished={finished}
      />
      </div>
    </div>
  );
}

export default App;
