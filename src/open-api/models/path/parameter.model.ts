export interface IParameter {
    name: string;
    in: "query" | "header" | "path" | "cookie";
    description: string;
    required: boolean;
    deprecated: boolean;
    allowEmptyValue: boolean;
}