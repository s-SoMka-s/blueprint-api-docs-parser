import { IServerVariable } from "./server-variable.model";

export interface IServer {
    url: string;
    description: string;
    variables: Map<string, IServerVariable>;   
}