"use strict";
import powerbi  from "powerbi-visuals-api";

import * as ReactDOM from "react-dom";
import DataView = powerbi.DataView;
import ISelectionId= powerbi.visuals.ISelectionId
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
import { VisualSettings } from "./settings";
import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import FormattingSettingsModel = formattingSettings.Model;





export class Visual implements IVisual {
    private target: HTMLElement;
    private settings: any;
    private theme: string;
    private scale : string;
    private format :string;
    private rowData : any;
    private columnData: any;
    private host : IVisualHost;
    private selectionManager ;

    
    constructor(options: VisualConstructorOptions) {
        this.target = options.element;
        this.settings = new VisualSettings();
       
        this.theme = this.settings.settings.theme;
        this.scale = this.settings.settings.scale;
        this.format = this.settings.settings.scale;

        this.host=options.host
        
        this.selectionManager= this.host.createSelectionManager();
    
        Component(options.element)
        
    }

    public update(options: VisualUpdateOptions) {

        const button = document.createElement("button");
        button.innerText = "Change Theme";
        button.id = "changeThemeButton";
        this.target.appendChild(button);
       
        const dataViews = options.dataViews;
        
        if (!dataViews || dataViews.length === 0) return;
        const dataView = dataViews[0];
        
        const columnss = dataView.table.columns.map(col => {
            const obj: any = {};
            obj['field']=col.displayName
            
            return obj;
        });
        const data=dataView.table.rows.map(row => {
            const obj :any= {};
            for(let i=0;i<row.length;i++)
                {
                    obj[`${dataView.table.columns[i].displayName}`]=row[i];
                }
                return obj;
        });

        console.log(columnss)
        console.log(data)
        this.columnData=columnss
        this.rowData=data

        this.settings = VisualSettings.parse<VisualSettings>(dataView);
        this.theme = this.settings.settings.theme;
        // this.selectionManager=this.host.createSelectionManager();
        button.onclick = () => this.onChangeThemeButtonClick(this.rowData,this.columnData,options,dataView,onRowClick);
        const onRowClick = (rowIndex: any) => {
           
            const selection: ISelectionId = this.host.createSelectionIdBuilder()
            .withTable(dataView.table, rowIndex)
            .createSelectionId();
 
            this.selectionManager.select(selection);
        };
       
        
        Component3(this.target,this.rowData,this.columnData,this.theme,this.scale,onRowClick)
        
    }
    

    private onChangeThemeButtonClick(data,columnss,options,dataView,onRowClick) {
        const newTheme= this.theme === "alpine" ? "material-dark" : "alpine" 
        const event = new CustomEvent("selectObject", {
            detail: {
                objectName: "settings",
                properties: {
                    ['theme']: newTheme
                },
                selector: null
            }
        });
        this.target.dispatchEvent(event);
        
        this.settings = VisualSettings.parse<VisualSettings>(dataView);
        this.theme = this.settings.settings.theme;

        this.theme=newTheme

        Component3(this.target,data,columnss,this.theme,this.scale,onRowClick)
    }
   
    
    
    public getFormattingModel():any  {
        return {
            dataViewMappings: [],
            objects: {
                general: {
                    displayName: "General",
                    properties: {
                        theme: this.settings.theme,
                        scale: this.settings.scale,
                        format: this.settings.format
                    }
                }
            }
        };
    }

}