import { IInfo } from './models/info/info.model';
import { IOpenApi } from './models/open-api.model';
import { IPathItem } from './models/path/path-item.model';
import { ISecurityRequirement } from './models/security-requirement.model';
import { IServer } from './models/server.model';
import { ITag } from './models/tag.model';

export class OpenApiBuilder {
    private _document: IOpenApi;

    constructor() {
        this._document = {
            openapi: '3.0.0',
            info: null,
            servers: [],
            paths: new Map<string, IPathItem>,
            security: [],
            tags: [],
        };
    }

    setInfoSection(info: IInfo): void {
        this._document.info = info;
    }

    addServerObject(server: IServer): void {
        this._document.servers.push(server);
    }

    addPathItem(key: string, item: IPathItem): void {
        this._document.paths.set(key, item);
    }

    addSecurityRequirement(requirement: ISecurityRequirement): void {
        this._document.security.push(requirement);
    }

    addTag(tag: ITag): void {
        this._document.tags.push(tag);
    }

    buid(): IOpenApi {
        return this._document;
    }
}
