import * as React from "react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import "ag-grid-community/styles/ag-theme-material.css";
import './styles.css';
interface TableVisualProps {
    data: any[];
    columnDefs: ColDef[];
    themeBack: string;
    scale: string;
}
declare const TableVisual2: React.FC<TableVisualProps>;
export default TableVisual2;
