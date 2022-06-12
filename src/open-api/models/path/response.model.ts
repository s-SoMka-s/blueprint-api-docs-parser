import { IHeader } from "../header.model";
import { IReference } from "../reference.model";

export interface IResponse {
    description: string;
    headers: Map<string , IHeader | IReference>;
    content: Map<string, null>;
}