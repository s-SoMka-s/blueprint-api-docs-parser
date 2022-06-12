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

<<<<<<< HEAD
    next(): Token | null {
=======
    next(): Token {
>>>>>>> 1023ec896b296a834fb887484e84802780b5372d
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
