import { IInfo } from './info/info.model';
import { IPathItem } from './path/path-item.model';
import { ISecurityRequirement } from './security-requirement.model';
import { IServer } from './server.model';
import { ITag } from './tag.model';

export interface IOpenApi {
    openapi: string;
    info: IInfo | null;
    servers: IServer[];
    paths: Map<string, IPathItem>;
    security: ISecurityRequirement[];
    tags: ITag[];
}
