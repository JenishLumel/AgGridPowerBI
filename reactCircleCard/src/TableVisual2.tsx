// src/TableVisual.tsx
import * as React from "react";
import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import "ag-grid-community/styles/ag-theme-material.css";

import './styles.css';

interface TableVisualProps {
    data: any[];
    columnDefs: ColDef[];
    themeBack:string;
    scale:string
}

const TableVisual2: React.FC<TableVisualProps> = ({ data, columnDefs,themeBack,scale }) => {
    const format="currency"
    const [column , setColumn] = useState<ColDef[]>(columnDefs);
    const [rowData , setRowData] = useState(data); 
    const [theme,setTheme]=useState(themeBack)
    const [scaling,setScale]=useState(scale)
    const [formatt,setFormat]=useState(format)
 
    const valueFormatter = (params) => {
        const value = params.value;
        if (typeof value !== "number") return value;

        switch (scaling) {
            case "thousands":
                return (value / 1000).toFixed(2) + "K";
            case "millions":
                return (value / 1000000).toFixed(2) + "M";
            case "billions":
                return (value / 1000000000).toFixed(2) + "B";
            default:
                return value;
        }

    };

  

    React.useEffect(() => {
        const updatedColumnDefs = columnDefs.map(colDef => ({
            ...colDef,
            valueFormatter
        }));

       
    
        setRowData(data)
        setColumn(updatedColumnDefs)
        setTheme(themeBack)
       
      }, [columnDefs,themeBack,scaling,formatt]) 
      
          
    return (
        
        <>
        <select onChange={(e) => setScale(e.target.value)} value={scaling}>
                    <option value="none">None</option>
                    <option value="thousands">Thousands</option>
                    <option value="millions">Millions</option>
                    <option value="billions">Billions</option>
                </select>
                <select onChange={(e) => setFormat(e.target.value)} value={formatt}>
                    <option value="none">None</option>
                    <option value="currency">Currency</option>
                    <option value="percentage">Percentage</option>
                    <option value="decimal">Decimal</option>
                </select>
        <div className={`ag-theme-${theme}`} style={{ height: "100%", width: "100%" }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={column}
                animateRows={true}
            />
        </div>
        </>
        
    ); 
};




export default TableVisual2;
