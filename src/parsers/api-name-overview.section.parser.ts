import ApiNameOverviewSectionNode from '../ast/sections/api-name-overview/api-name-overview.section.node';
import { tokenTypesList } from '../models/tokens/TokenType';
import { TokenIterator } from '../token.iterator';
import SectionParser from './section.parser';

export default class ApiNameOverviewSectionParser extends SectionParser {
    constructor(iterator: TokenIterator) {
        super(iterator);
    }

    parse(): ApiNameOverviewSectionNode {
        this._iterator.require(tokenTypesList.FIRST_MARKDOWN_HEADER);

        const identifier = this.parseIdentifier();
        this._iterator.require(tokenTypesList.LINE_BREAK);

        const description = '';

        return new ApiNameOverviewSectionNode(null, identifier);
    }
}
