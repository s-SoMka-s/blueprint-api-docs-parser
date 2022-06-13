import { IdentifierNode } from '../../ast/types/identifier.node';
import { tokenTypesList } from '../../models/tokens/TokenType';
import { TokenIterator } from '../../token.iterator';

export default class BaseParser {
    constructor(public _iterator: TokenIterator) {}

    protected parseIdentifier(): IdentifierNode {
        const identifier = this._iterator.require(tokenTypesList.IDENTIFIER);

        return new IdentifierNode(identifier);
    }
}
