import { Iterator } from './iterator';
import Token from './models/tokens/Token';

export class TokenIterator implements Iterator<Token> {
    private tokens: Token[];
    private position: number = 0;

    constructor(tokens: Token[]) {
        this.tokens = tokens;
    }

    current(): Token {
        return this.tokens[this.position];
    }

    next(): Token {
        if (!this.hasNext()) {
            return null;
        }

        this.position += 1;
        return this.tokens[this.position];
    }

    hasNext(): boolean {
        return true;
    }
}
