"use strict";
import powerbi from "powerbi-visuals-api";
import * as ReactDOM from "react-dom";

import DataView = powerbi.DataView;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import TableVisual from "./TableVisual"
import { ColDef } from "ag-grid-community";
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;
import {Component} from "./Component";    
import {Component3} from "./Component3"
import "./../style/visual.less";

export class Visual implements IVisual {
    private target: HTMLElement;
    
    
    constructor(options: VisualConstructorOptions) {
        this.target = options.element;
        Component(options.element)
    
    }

    public update(options: VisualUpdateOptions) {
       
        const dataViews = options.dataViews;
        if (!dataViews || dataViews.length === 0) return;
        const dataView = dataViews[0];
        const tableData = dataView.table.rows.map(row => {
            const obj: any = {};
            row.forEach((val, idx) => {
                obj["field0"] = val;
            });
            return obj;
        });
    
        const columnDefs = dataView.table.columns.map((col,index) => ({ 
            headerName: col.displayName, field: "field".concat(String(index)) 
        }));
        Component3(this.target,tableData,columnDefs)
        
    }
    private transformData(dataView: DataView): any[] {
        const table = dataView.table;
        if (!table || !table.rows || table.rows.length === 0) return [];

        return table.rows.map(row => {
            const transformedRow: { [key: string]: any } = {};
            table.columns.forEach((col, index) => {
                transformedRow[col.queryName] = row[index];
            });
            
            return transformedRow;
        });
    }
    
     
}