import React from "react";
import { Todo } from "../component/todo";
import {render,screen,cleanup} from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(()=>{
    cleanup();
})

it("renders without crashing",()=>{
    const items = [];
    const finished = [];
    const newTitle = "";
    render(<Todo items={items} finished={finished} newTitle={newTitle}/>);
    const todoElement = screen.getByTestId("todo-1");
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("Todo List App");
})
it("renders one element",()=>{
    const items = [{title:"test"}]
    const finished = [];
    const newTitle = "";
    render(<Todo items={items} finished={finished} newTitle={newTitle}/>);
    const todoElement = screen.getByTestId("todo-1");
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("test");

})
it("renders two element",()=>{
    const items = [{title:"test"},{title:"testing"}]
    const finished = [];
    const newTitle = "";
    render(<Todo items={items} finished={finished} newTitle={newTitle}/>);
    const todoElement = screen.getByTestId("todo-1");
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("test");
    expect(todoElement).toHaveTextContent("testing");
})
it("macthes snapshot 1",()=>{
    const items = [];
    const tree = renderer.create(<Todo items={items}/>).toJSON();
    expect(tree).toMatchSnapshot();
})
it("macthes snapshot 2",()=>{
    const items = [{title:"test"},{title:"testing"}];
    const tree = renderer.create(<Todo items={items}/>).toJSON();
    expect(tree).toMatchSnapshot();
})