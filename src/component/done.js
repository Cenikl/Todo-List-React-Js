import React from "react";

export const Done = (props) => {
const{finished} = props;

    return(<div data-testid="done-1" className="done">
    <h1>Done</h1>
    <hr></hr>
    <ul>
      {finished.map(e => {
        return(
          <li key={e.title} className="listing">
            <p> <h4> Title : </h4> {e.title}</p>
          </li>
        )
      })}
    </ul>
  </div>)
}