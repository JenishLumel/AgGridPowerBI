import * as React from "react";
import * as ReactDOM from "react-dom";
import TableVisual from "./TableVisual"
import TableVisual2 from "./TableVisual2"



const Component3 = (element,tableData,columnDefs,themeVisual,scale,onRowClick) => {
    
    // ReactDOM.render(<TableVisual data={tableData} columnDefs={columnDefs}  onRowClick={onRowClick}/>, element);
     ReactDOM.render(<TableVisual2 themeBack={themeVisual} data={tableData} columnDefs={columnDefs} scale={scale} onRowClick={onRowClick}/>, element);
    
}

export 
{
    Component3
}