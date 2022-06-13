import ActionSectionNode from '../ast/sections/action/action.section.node';
import { ResourceSection } from '../ast/sections/resource/resource.section.node';
import { tokenTypesList } from '../models/tokens/TokenType';
import { TokenIterator } from '../token.iterator';
import SectionParser from './section.parser';

export default class ResourceSectionParser extends SectionParser {
    constructor(iterator: TokenIterator) {
        super(iterator);
    }

    // parseResourceGroupSection(): ResourceGroupSection {
    //     this.require(tokenTypesList.FIRST_MARKDOWN_HEADER);
    //     this.require(tokenTypesList.GROUP);

    //     const identifier = this.parseIdentifier();

    //     this.require(tokenTypesList.LINE_BREAK);

    //     return new ResourceGroupSection(null, identifier);
    // }

    parse(): ResourceSection {
        this._iterator.require(tokenTypesList.FIRST_MARKDOWN_HEADER);

        const identifier = this.parseIdentifier();

        this._iterator.require(tokenTypesList.OPENING_SQUARE_BRACKET);

        // const method = this.parseHeaderKeyword(tokenTypesList.HTTP_METHOD);
        const uri = this.parseHeaderKeyword(tokenTypesList.URI_TEMPLATE);

        this._iterator.require(tokenTypesList.CLOSING_SQUARE_BRACKET);

        this._iterator.require(tokenTypesList.LINE_BREAK);

        const description = '';

        this._iterator.require(tokenTypesList.LINE_BREAK);
        const action1 = this.parseActionSection();

        this._iterator.require(tokenTypesList.LINE_BREAK);
        const action2 = this.parseActionSection();

        this._iterator.require(tokenTypesList.LINE_BREAK);
        const action3 = this.parseActionSection();

        this._iterator.require(tokenTypesList.LINE_BREAK);
        const action4 = this.parseActionSection();

        return new ResourceSection(identifier, null, uri, [
            action1,
            action2,
            action3,
            action4,
        ]);
    }

    private parseActionSection(): ActionSectionNode {
        this._iterator.require(tokenTypesList.SECOND_MARKDOWN_HEADER);
        const identifier = this.parseIdentifier();

        this._iterator.require(tokenTypesList.OPENING_SQUARE_BRACKET);

        const method = this.parseHeaderKeyword(tokenTypesList.HTTP_METHOD);
        const uri = this.parseHeaderKeyword(tokenTypesList.URI_TEMPLATE);

        this._iterator.require(tokenTypesList.CLOSING_SQUARE_BRACKET);
        this._iterator.require(tokenTypesList.LINE_BREAK);

        return new ActionSectionNode(identifier, method, uri);
    }
}
