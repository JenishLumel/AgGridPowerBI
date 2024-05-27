// src/TableVisual.tsx
import * as React from "react";
import { useState ,useEffect} from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import './styles.css';

interface TableVisualProps {
    data: any[];
    columnDefs: ColDef[];
}

const TableVisual3: React.FC<TableVisualProps> = ({ data, columnDefs }) => {
    
    
      
      //[{field0: 'Airplane'},{field0: 'Helicopter'}]
      //[{field0 : 'KIT'},{field0 : 'RIF'}]  
      //[{field0: 'Airplane',field1:'KIT'}},{field0: 'Helicopter',field1 : ''RIF}]


    /*
    const [column] = useState<ColDef[]>(columnDefs);
    
      // Define the row data
      const [rowData] = useState([data]);
      */
      //const [column , setColumn] = useState<ColDef[]>(columnDefs);
      //[{headerName: 'RetailPrice', field: 'field'}]
    
      // Define the row data
     // const [rowData , setRowData] = useState(data); 
      
      //Start of object converting

      

      //End of Object Converting
      /*
       React.useEffect(() => {
        setRowData(data)
        setColumn(columnDefs)
       
      }, [columnDefs]) 
      */
 
      const [rowData, setRowData] = useState<any[]>([]);     
      const [column, setColumn] = useState<ColDef[]>(columnDefs);
      console.log(data);
      useEffect(() => {
        console.log(data);
        
        const mergeArrays = (array1: any[], array2: any[]): any[] => {
            
            const maxLength = Math.max(array1.length, array2.length);
            /*console.log(array1.length)
            console.log(array1)
            console.log(array2.length)
            console.log(array2)*/
            
            const result = [];
        
            for (let i = 0; i < maxLength; i++) {
                const obj1 = array1[i] || {}; // Use an empty object if array1[i] is undefined
                const obj2 = array2[i] || {}; // Use an empty object if array2[i] is undefined
        
                const mergedObject = {
                    field0: obj1.field0,
                    field1: obj2.field0
                };
        
                result.push(mergedObject);
            }
        
            return result;
        };
        
          
          const mergedData = mergeArrays(data, rowData);
          //console.log(mergedData)
          //console.log(columnDefs)
          setRowData(mergedData);
          setColumn(columnDefs);
      }, [columnDefs]);
      
      
      
      

    return (
        
        <>
        
        <h1>{data[0]['Product.Kit Type']}</h1>
        
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






export default TableVisual3;
