import DataSctructuresSectionNode from '../ast/sections/data-structures/data-structures.section.node';
import NamedTypeNode from '../ast/types/named-type.node';
import { tokenTypesList } from '../models/tokens/TokenType';
import { TokenIterator } from '../token.iterator';
import SectionParser from './section.parser';

export default class DataStructuresSectionParser extends SectionParser {
    constructor(iterator: TokenIterator) {
        super(iterator);
    }

    parse(): DataSctructuresSectionNode {
        this._iterator.require(tokenTypesList.FIRST_MARKDOWN_HEADER);
        this._iterator.require(tokenTypesList.DATA_STRUCTURES);
        this._iterator.require(tokenTypesList.LINE_BREAK);

        return new DataSctructuresSectionNode(null, null);
    }

    private parseNamedType(): NamedTypeNode {
        this._iterator.require(tokenTypesList.SECOND_MARKDOWN_HEADER);

        const identifier = this.parseIdentifier();

        return new NamedTypeNode(identifier, '');
    }
}
