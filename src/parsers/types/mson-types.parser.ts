import PrimitiveTypeNode from '../../ast/types/mson/primitive.type.node';
import TypeNode from '../../ast/types/mson/type.node';
import { tokenTypesList } from '../../models/tokens/TokenType';
import { TokenIterator } from '../../token.iterator';
import BaseParser from '../base/base.parser';

export default class MsonTypesParser extends BaseParser {
    constructor(iterator: TokenIterator) {
        super(iterator);
    }

    // + name (string)
    private parsePrimitive(): PrimitiveTypeNode {
        const identifier = this.parseIdentifier();
        const type = this.parseTypeDeclaration();

        return new PrimitiveTypeNode(identifier, type);
    }

    private parseTypeDeclaration(): TypeNode {
        this._iterator.require(tokenTypesList.OPENING_PARENTHESIS);
        const matched = this._iterator.match(
            tokenTypesList.STRING,
            tokenTypesList.NUMBER,
            tokenTypesList.BOOLEAN
        );
        this._iterator.require(tokenTypesList.CLOSING_PARENTHESIS);

        return new TypeNode(matched);
    }
}
