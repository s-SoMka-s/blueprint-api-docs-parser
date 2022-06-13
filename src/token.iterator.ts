import { Iterator } from './iterator';
import Token from './models/tokens/Token';
import TokenType from './models/tokens/TokenType';

export class TokenIterator implements Iterator<Token> {
    private tokens: Token[];
    private position: number = 0;

    constructor(tokens: Token[]) {
        this.tokens = tokens;
    }

    current(): Token {
        return this.tokens[this.position];
    }

    next(): Token | null {
        if (!this.hasNext()) {
            return null;
        }

        this.position += 1;
        return this.tokens[this.position];
    }

    hasNext(): boolean {
        return true;
    }

    match(...expected: TokenType[]): Token | null {
        if (!this.hasNext()) {
            return null;
        }

        const current = this.current();
        if (expected.find((type) => type.name === current.type.name)) {
            this.next();
            return current;
        }

        return null;
    }

    require(...expected: TokenType[]): Token {
        const token = this.match(...expected);
        if (!token) {
            throw new Error(
                `Doesn't match any. Expected ${expected
                    .map((e) => e.name)
                    .toString()}`
            );
        }

        return token;
    }
}
