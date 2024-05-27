import * as React from "react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import './styles.css';
interface TableVisualProps {
    data: any[];
    columnDefs: ColDef[];
}
declare const TableVisual2: React.FC<TableVisualProps>;
export default TableVisual2;
