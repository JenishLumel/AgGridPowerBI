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
    onRowClick : any;
}

const TableVisual: React.FC<TableVisualProps> = ({ data, columnDefs,onRowClick }) => {
    console.log("hi")
    console.log(columnDefs);
    console.log(data);
    const [column , setColumn] = useState<ColDef[]>([
        { field: 'make', headerName: 'Make' },
        { field: 'model', headerName: 'Model' },
        { field: 'price', headerName: 'Price' }
      ]);
    
      // Define the row data
      const [rowData , setRowData] = useState([
        { 'make': 'Toyota', 'model': 'Celica', 'price': 35000 },
        { 'make': 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxster', price: 72000 } 
      ]); 
     
      React.useEffect(() => {
        setRowData(data)
        setColumn(columnDefs)
       
      }, [])
       
      const fieldName=column[0]['field']
      const headerName=column[0]['headerName']
      
    return (
        <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>{headerName}</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((item,index) => (
            <tr key={item.id} onClick={() => onRowClick(index)}>
              <td>{item[fieldName]}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default TableVisual;
