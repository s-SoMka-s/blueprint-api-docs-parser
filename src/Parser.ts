import { rootCertificates } from 'tls';
import NamedSectionNode from './ast/abstract/named.section.node';
import { ApiOverviewNode } from './ast/ApiOverviewNode';
import { ApiTitleNode } from './ast/ApiTitleNode';
import { SectionNode, SectionType } from './ast/SectionNode';
import ApiNameOverviewSectionNode from './ast/sections/api-name-overview/api-name-overview.section.node';
import FormatNode from './ast/sections/metadata/format.node';
import HostNode from './ast/sections/metadata/host.node';
import { MetadataSectionNode } from './ast/sections/metadata/metadata.section.node';
import StatementNode from './ast/StatementNode';
import { StringNode } from './ast/StringNode';
import { IdentifierNode } from './ast/types/identifier.node';
import HeaderKeywordNode from './ast/types/keywords/header-keyword.node';
import KeywordNode from './ast/types/keywords/header-keyword.node';
import { WordNode } from './ast/WordNode';
import Token from './models/tokens/Token';
import TokenType, { tokenTypesList } from './models/tokens/TokenType';

export default class Parser {
    tokens: Token[];
    pos: number = 0;
    scope: any = {};

    constructor(tokens: Token[]) {
        this.tokens = tokens;
    }

    parse = (): StatementNode => {
        const root = new StatementNode(null);
        //while (this.pos < this.tokens.length) {
        const metadata = this.parseMetaDataSection();
        root.addChild(metadata);

        this.require(tokenTypesList.LINE_BREAK);

        const apiNameOverview = this.parseApiNameOverviewSection();
        root.addChild(apiNameOverview);
        //}
        return root;
    };

    // Group
    // Data Structures
    // Get, Post, Put, Delete
    // /resource/{id}
    private parseHeaderKeyword(): HeaderKeywordNode {
        const keyword = this.match(
            tokenTypesList.GROUP,
            tokenTypesList.DATA_STRUCTURES,
            tokenTypesList.HTTP_METHOD,
            tokenTypesList.URI_TEMPLATE
        );

        return new HeaderKeywordNode(keyword);
    }

    private parseIdentifier(): IdentifierNode {
        const identifier = this.match(tokenTypesList.IDENTIFIER);

        return new IdentifierNode(identifier);
    }

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
        const description = '';

        return new ApiNameOverviewSectionNode(null, identifier);
    };

    private match = (...expected: TokenType[]): Token => {
        if (this.pos < this.tokens.length) {
            const current = this.tokens[this.pos];

            if (expected.find((type) => type.name === current.type.name)) {
                this.pos += 1;
                return current;
            }
        }

        throw new Error(`Doesn't match any ${expected.values}`);
    };

    private require = (...expected: TokenType[]): Token => {
        const token = this.match(...expected);
        if (!token) {
            throw new Error('');
        }

        return token;
    };
}
