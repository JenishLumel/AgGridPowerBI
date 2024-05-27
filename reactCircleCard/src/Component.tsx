import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App"
import ReactDataGrid from "./ReactDataGrid"

export interface State {
    textLabel: string,
    textValue: string
}

export const initialState: State = {
    textLabel: "",
    textValue: ""
}

const Component = (element) => {
    
    ReactDOM.render(<App />, element);
}

export 
{
    Component
}
 
