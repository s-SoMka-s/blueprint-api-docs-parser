import DataSctructuresSectionNode from '../ast/sections/data-structures/data-structures.section.node';
import NamedTypeNode from '../ast/types/named-type.node';
import { tokenTypesList } from '../models/tokens/TokenType';
import BaseParser from './base.parser';

export default class DataStructuresSectionParser extends BaseParser {
    private parse(): DataSctructuresSectionNode {
        this.require(tokenTypesList.FIRST_MARKDOWN_HEADER);
        this.require(tokenTypesList.DATA_STRUCTURES);
        this.require(tokenTypesList.LINE_BREAK);

        return new DataSctructuresSectionNode(null);
    }

    private parseNamedType(): NamedTypeNode {
        this.require(tokenTypesList.SECOND_MARKDOWN_HEADER);

        const identifier = this.parseIdentifier();

        return new NamedTypeNode(identifier, '');
    }
}
