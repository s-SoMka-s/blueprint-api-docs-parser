import FormatNode from '../ast/sections/metadata/format.node';
import HostNode from '../ast/sections/metadata/host.node';
import { MetadataSectionNode } from '../ast/sections/metadata/metadata.section.node';
import { tokenTypesList } from '../models/tokens/TokenType';
import { TokenIterator } from '../token.iterator';
import SectionParser from './section.parser';

export default class MetadataSectionParser extends SectionParser {
    constructor(iterator: TokenIterator) {
        super(iterator);
    }

    // FORMAT: 1A
    // HOST: http://example.com
    parse = (): MetadataSectionNode => {
        const format = this.parseFormatNode();
        const host = this.parseHostNode();

        return new MetadataSectionNode(format, host);
    };

    // FORMAT: 1A
    private parseFormatNode(): FormatNode {
        this._iterator.require(tokenTypesList.FORMAT);
        this._iterator.require(tokenTypesList.COLON);
        const format = this._iterator.match(tokenTypesList.IDENTIFIER);
        this._iterator.require(tokenTypesList.LINE_BREAK);
        return new FormatNode(format);
    }

    // HOST: http://example.com
    private parseHostNode(): HostNode {
        this._iterator.require(tokenTypesList.HOST);
        this._iterator.require(tokenTypesList.COLON);
        const host = this._iterator.match(tokenTypesList.URL);
        this._iterator.require(tokenTypesList.LINE_BREAK);
        return new HostNode(host);
    }
}
