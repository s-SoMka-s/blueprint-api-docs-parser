import { SectionNode } from '../ast/sections/section.node';
import { IdentifierNode } from '../ast/types/identifier.node';
import HeaderKeywordNode from '../ast/types/keywords/header-keyword.node';
import TokenType, { tokenTypesList } from '../models/tokens/TokenType';
import { TokenIterator } from '../token.iterator';
import IParser from './interfaces/parser.interface';

export default class SectionParser implements IParser<SectionNode> {
    constructor(public _iterator: TokenIterator) {}

    parse(): SectionNode {
        throw new Error('Method not implemented.');
    }

    // Group
    // Data Structures
    // Get, Post, Put, Delete
    // /resource/{id}
    protected parseHeaderKeyword(expected: TokenType): HeaderKeywordNode {
        const keyword = this._iterator.match(expected);

        return new HeaderKeywordNode(keyword);
    }

    protected parseIdentifier(): IdentifierNode {
        const identifier = this._iterator.require(tokenTypesList.IDENTIFIER);

        return new IdentifierNode(identifier);
    }
}
