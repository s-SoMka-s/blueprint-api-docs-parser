import ActionSectionNode from '../ast/sections/action/action.section.node';
import { ResourceGroupSection } from '../ast/sections/resource-group/resource-group.section.node';
import { ResourceSection } from '../ast/sections/resource/resource.section.node';
import { tokenTypesList } from '../models/tokens/TokenType';
import BaseParser from './base.parser';

export default class ResourceSectionParser extends BaseParser {
    parseResourceGroupSection(): ResourceGroupSection {
        this.require(tokenTypesList.FIRST_MARKDOWN_HEADER);
        this.require(tokenTypesList.GROUP);

        const identifier = this.parseIdentifier();

        this.require(tokenTypesList.LINE_BREAK);

        return new ResourceGroupSection(null, identifier);
    }

    parseResourceSection(): ResourceSection {
        this.require(tokenTypesList.FIRST_MARKDOWN_HEADER);

        const identifier = this.parseIdentifier();

        this.require(tokenTypesList.OPENING_SQUARE_BRACKET);

        // const method = this.parseHeaderKeyword(tokenTypesList.HTTP_METHOD);
        const uri = this.parseHeaderKeyword(tokenTypesList.URI_TEMPLATE);

        this.require(tokenTypesList.CLOSING_SQUARE_BRACKET);

        this.require(tokenTypesList.LINE_BREAK);

        const description = '';

        this.require(tokenTypesList.LINE_BREAK);
        const action1 = this.parseActionSection();

        this.require(tokenTypesList.LINE_BREAK);
        const action2 = this.parseActionSection();

        this.require(tokenTypesList.LINE_BREAK);
        const action3 = this.parseActionSection();

        this.require(tokenTypesList.LINE_BREAK);
        const action4 = this.parseActionSection();

        return new ResourceSection(identifier, null, uri, [
            action1,
            action2,
            action3,
            action4,
        ]);
    }

    private parseActionSection(): ActionSectionNode {
        this.require(tokenTypesList.SECOND_MARKDOWN_HEADER);
        const identifier = this.parseIdentifier();

        this.require(tokenTypesList.OPENING_SQUARE_BRACKET);

        const method = this.parseHeaderKeyword(tokenTypesList.HTTP_METHOD);
        const uri = this.parseHeaderKeyword(tokenTypesList.URI_TEMPLATE);

        this.require(tokenTypesList.CLOSING_SQUARE_BRACKET);
        this.require(tokenTypesList.LINE_BREAK);

        return new ActionSectionNode(identifier, method, uri);
    }
}
