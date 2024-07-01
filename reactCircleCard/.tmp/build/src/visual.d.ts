import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import "./../style/visual.less";
export declare class Visual implements IVisual {
    private target;
    private settings;
    private theme;
    private scale;
    private format;
    private rowData;
    private columnData;
    private host;
    private selectionManager;
    constructor(options: VisualConstructorOptions);
    update(options: VisualUpdateOptions): void;
    private onChangeThemeButtonClick;
    getFormattingModel(): any;
}
