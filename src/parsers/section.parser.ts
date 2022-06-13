import { SectionNode } from '../ast/sections/section.node';
import { IdentifierNode } from '../ast/types/identifier.node';
import HeaderKeywordNode from '../ast/types/keywords/header-keyword.node';
import TokenType, { tokenTypesList } from '../models/tokens/TokenType';
import { TokenIterator } from '../token.iterator';
import BaseParser from './base/base.parser';
import IParser from './interfaces/parser.interface';

export default class SectionParser
    extends BaseParser
    implements IParser<SectionNode>
{
    constructor(_iterator: TokenIterator) {
        super(_iterator);
    }

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
}
