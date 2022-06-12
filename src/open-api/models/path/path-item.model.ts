import { IOperation } from "./operation.model";
import { IParameter } from "./parameter.model";

export interface IPathItem {
    summary: string;
    description: string;
    get: IOperation;
    post: IOperation;
    put: IOperation;
    delete: IOperation;
    parameters: IParameter[];
}