import React from "react";
import { Done } from "../component/done";
import {render,screen,cleanup} from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(() =>{
    cleanup();
})

it("renders without crashing",()=>{
    const finished = [];
    render(<Done finished={finished}></Done>)
    const doneElement = screen.getByTestId("done-1");
    expect(doneElement).toBeInTheDocument();
})

it("renders one element",()=>{
    const finished = [{title:"testing"}];
    render(<Done finished={finished}></Done>)
    const doneElement = screen.getByTestId("done-1");
    expect(doneElement).toBeInTheDocument();
    expect(doneElement).toHaveTextContent("testing");
})
it("renders two elements",()=>{
    const finished = [{title:"testing"},{title:"testingtwo"}];
    render(<Done finished={finished}></Done>)
    const doneElement = screen.getByTestId("done-1");
    expect(doneElement).toBeInTheDocument();
    expect(doneElement).toHaveTextContent("testing");
    expect(doneElement).toHaveTextContent("testingtwo");
})
 
it("matches snapshot 1",()=>{
    const finished = [];
    const tree = renderer.create(<Done finished={finished}></Done>).toJSON();
    expect(tree).toMatchSnapshot();
})

it("matches snapshot 2",()=>{
    const finished = [{title:"testing"}];
    const tree = renderer.create(<Done finished={finished}></Done>).toJSON();
    expect(tree).toMatchSnapshot();
})
it("matches snapshot 3",()=>{
    const finished = [{title:"testing"},{title:"testingtwo"}];
    const tree = renderer.create(<Done finished={finished}></Done>).toJSON();
    expect(tree).toMatchSnapshot();
})
