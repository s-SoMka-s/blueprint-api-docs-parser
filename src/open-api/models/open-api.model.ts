import { IInfo } from "./info/info.model";
import { IPathItem } from "./path/path-item.model";
import { ISecurity } from "./security.model";
import { IServer } from "./server.model";
import { ITag } from "./tag.model";

export interface IOpenApi {
    openapi: string;
    info: IInfo;
    servers: IServer[];
    paths: Map<string, IPathItem>;
    security: ISecurity[];
    tags: ITag[];
}