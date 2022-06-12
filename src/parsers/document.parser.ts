import ApiNameOverviewSectionNode from '../ast/sections/api-name-overview/api-name-overview.section.node';
import FormatNode from '../ast/sections/metadata/format.node';
import HostNode from '../ast/sections/metadata/host.node';
import { MetadataSectionNode } from '../ast/sections/metadata/metadata.section.node';
import StatementNode from '../ast/StatementNode';
import { Iterator } from '../iterator';
import Token from '../models/tokens/Token';
import { tokenTypesList } from '../models/tokens/TokenType';
import BaseParser from './base.parser';
import DataStructuresSectionParser from './data-structures-section.parser';
import ResourceSectionParser from './resource-section.parser';

export default class DocumentParser extends BaseParser {
    private resourceParser: ResourceSectionParser;
    private dataStructuresParser: DataStructuresSectionParser;

    constructor(iterator: Iterator<Token>) {
        super(iterator);

        this.resourceParser = new ResourceSectionParser(iterator);
        this.dataStructuresParser = new DataStructuresSectionParser(iterator);
    }

    parse = (): StatementNode => {
        const root = new StatementNode(null);
        const metadata = this.parseMetaDataSection();
        root.addChild(metadata);

        this.require(tokenTypesList.LINE_BREAK);

        const apiNameOverview = this.parseApiNameOverviewSection();
        root.addChild(apiNameOverview);

        this.require(tokenTypesList.LINE_BREAK);

        const resource = this.resourceParser.parseResourceSection();
        root.addChild(resource);

        return root;
    };

    // FORMAT: 1A
    // HOST: http://example.com
    private parseMetaDataSection = (): MetadataSectionNode => {
        const format = this.parseFormatNode();
        const host = this.parseHostNode();

        return new MetadataSectionNode(format, host);
    };

    // FORMAT: 1A
    private parseFormatNode(): FormatNode {
        this.require(tokenTypesList.FORMAT);
        this.require(tokenTypesList.COLON);
        const format = this.match(tokenTypesList.IDENTIFIER);
        this.require(tokenTypesList.LINE_BREAK);
        return new FormatNode(format);
    }

    // HOST: http://example.com
    private parseHostNode(): HostNode {
        this.require(tokenTypesList.HOST);
        this.require(tokenTypesList.COLON);
        const host = this.match(tokenTypesList.URL);
        this.require(tokenTypesList.LINE_BREAK);
        return new HostNode(host);
    }

    private parseApiNameOverviewSection = (): ApiNameOverviewSectionNode => {
        this.require(tokenTypesList.FIRST_MARKDOWN_HEADER);

        const identifier = this.parseIdentifier();
        this.require(tokenTypesList.LINE_BREAK);

        const description = '';

        return new ApiNameOverviewSectionNode(null, identifier);
    };
}
