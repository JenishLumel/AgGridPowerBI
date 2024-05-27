// src/TableVisual.tsx
import * as React from "react";
import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import './styles.css';

interface TableVisualProps {
    data: any[];
    columnDefs: ColDef[];
}

const TableVisual2: React.FC<TableVisualProps> = ({ data, columnDefs }) => {
    console.log(columnDefs);
    console.log(data);
    const [column , setColumn] = useState<ColDef[]>(columnDefs);
    const [rowData , setRowData] = useState(data); 
      
      
    React.useEffect(() => {
        setRowData(data)
        setColumn(columnDefs)
       
      }, [columnDefs]) 
      
      
    return (
        
        <>
        
        
        
        <div className="ag-theme-alpine" style={{ height: "100%", width: "100%" }}>
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
