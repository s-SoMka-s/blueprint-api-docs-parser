import { IdentifierNode } from '../ast/types/identifier.node';
import HeaderKeywordNode from '../ast/types/keywords/header-keyword.node';
import { Iterator } from '../iterator';
import Token from '../models/tokens/Token';
import TokenType, { tokenTypesList } from '../models/tokens/TokenType';

export default class BaseParser {
    iterator: Iterator<Token>;

    constructor(iterator: Iterator<Token>) {
        this.iterator = iterator;
    }

    // Group
    // Data Structures
    // Get, Post, Put, Delete
    // /resource/{id}
    protected parseHeaderKeyword(expected: TokenType): HeaderKeywordNode {
        const keyword = this.match(expected);

        return new HeaderKeywordNode(keyword);
    }

    protected parseIdentifier(): IdentifierNode {
        const identifier = this.match(tokenTypesList.IDENTIFIER);

        return new IdentifierNode(identifier);
    }

    protected match = (...expected: TokenType[]): Token | null => {
        if (!this.iterator.hasNext()) {
            return null;
        }

        const current = this.iterator.current();
        if (expected.find((type) => type.name === current.type.name)) {
            return current;
        }

        return null;
    };

    protected require = (...expected: TokenType[]): Token => {
        const token = this.match(...expected);
        if (!token) {
            throw new Error(
                `Doesn't match any. Expected ${expected
                    .map((e) => e.name)
                    .toString()}`
            );
        }

        return token;
    };
}
