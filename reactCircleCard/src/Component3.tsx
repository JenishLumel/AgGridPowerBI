import * as React from "react";
import * as ReactDOM from "react-dom";
import TableVisual from "./TableVisual"
import TableVisual2 from "./TableVisual2"
import TableVisual3 from "./TableVisual3"


const Component3 = (element,tableData,columnDefs) => {
    
    //ReactDOM.render(<TableVisual3 data={tableData} columnDefs={columnDefs}/>, element);
    ReactDOM.render(<TableVisual2 data={tableData} columnDefs={columnDefs}/>, element);
    //ReactDOM.render(<App />, element);
}

export 
{
    Component3
}