import Token from "./models/tokens/Token";
import { tokenTypesList } from "./models/tokens/TokenType";

export default class Lexer {
    code: string;
    pos: number = 0;
    tokenList: Token[] = []

    constructor(code: string) {
        this.code = code;
    }

    lexAnalisys(): Token[] {
        const tokens: Token[] = []
        while (this.hasNextToken()) {
            const token = this.getNextToken();
            if (token && token.type !== tokenTypesList.SPACE) {
                tokens.push(token);
            }
        }

        return tokens;
    }

    private hasNextToken(): boolean {
        if (this.pos >= this.code.length) {
            return false;
        }

        return true;
    }

    private getNextToken(): Token | null {
        const tokenTypesValues = Object.values(tokenTypesList)
        
        for (let i = 0; i < tokenTypesValues.length; i++) {
            const tokenType = tokenTypesValues[i];
            const regex = new RegExp('^' + tokenType.regex);
            const result = this.code.substring(this.pos).match(regex)
            if (result && result[0]) {
                const token = new Token(tokenType, result[0], this.pos);
                this.pos += result[0].length;
                return token;
            }
        }

        return null;
    }
}