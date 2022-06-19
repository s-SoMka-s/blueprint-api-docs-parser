import { notDeepEqual } from 'assert';
import ExpressionNode from '../ast/ExpressionNode';
import ApiNameOverviewSectionNode from '../ast/sections/api-name-overview/api-name-overview.section.node';
import { MetadataSectionNode } from '../ast/sections/metadata/metadata.section.node';
import { IInfo } from './models/info/info.model';
import { IOpenApi } from './models/open-api.model';
import { IPathItem } from './models/path/path-item.model';
import { ISecurityRequirement } from './models/security-requirement.model';
import { IServer } from './models/server.model';
import { ITag } from './models/tag.model';

export default class OpenApiBuilder {
    private _rootAstNode: ExpressionNode | null = null;
    private _document: IOpenApi;

    constructor() {
        const paths = new Map<string, IPathItem>();

        const api: IOpenApi = {
            openapi: '3.0.0',
            info: null,
            servers: [],
            paths,
            security: [],
            tags: [],
        };

        this._document = api;
    }

    setRootAstNode = (node: ExpressionNode): void => {
        this._rootAstNode = node;
    };

    build(): IOpenApi | null {
        if (!this._rootAstNode) {
            return null;
        }

        const node = this._rootAstNode;

        if (node instanceof ApiNameOverviewSectionNode) {
            const info: IInfo = {
                title: node.getTitle(),
                description: node.getDescription(),
                termsOfService: '',
                contact: null,
                license: null,
                version: '',
            };

            this.setInfoSection(info);
        }

        if (node instanceof MetadataSectionNode) {
            const server: IServer = {
                url: node.getHost(),
                description: '',
                variables: new Map(),
            };

            this.addServerObject(server);
        }

        return this._document;
    }

    private setInfoSection(info: IInfo): void {
        this._document.info = info;
    }

    private addServerObject(server: IServer): void {
        this._document.servers.push(server);
    }

    private addPathItem(key: string, item: IPathItem): void {
        this._document.paths.set(key, item);
    }

    private addSecurityRequirement(requirement: ISecurityRequirement): void {
        this._document.security.push(requirement);
    }

    private addTag(tag: ITag): void {
        this._document.tags.push(tag);
    }
}
