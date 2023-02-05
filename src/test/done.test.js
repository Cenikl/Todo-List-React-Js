import React from "react";
import { ReactDOM } from "react";
import { Done } from "../component/done";

it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Done></Done>,div)
})