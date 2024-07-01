import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
export declare class VisualSettings extends dataViewObjectsParser.DataViewObjectsParser {
    settings: Settings;
}
export declare class Settings {
    theme: string;
    scale: string;
    format: string;
}
