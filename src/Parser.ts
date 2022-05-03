import ExpressionNode from "./ast/ExpressionNode";
import StatementNode from "./ast/StatementNode";
import Token from "./models/tokens/Token";
import TokenType, { tokenTypesList } from "./models/tokens/TokenType";

export default class Parser {
    tokens: Token[];
    pos: number = 0;
    scope: any = {};

    public constructor(tokens: Token[]){
        this.tokens = tokens;
    }

    parse = (): ExpressionNode => {
        const root = new StatementNode();
        while (this.pos < this.tokens.length) {
            const codeStringNode = this.parseExpression();
            this.require(tokenTypesList.LINE_BREAK);
            root.addNode(codeStringNode);
        }

        return root;
    }

    private parseExpression = (): ExpressionNode => {
        return new ExpressionNode();
    }

    private match = (...expected: TokenType[]):Token | null => {
        if (this.pos < this.tokens.length) {
            const current = this.tokens[this.pos];

            if (expected.find(type => type.name === current.type.name)) {
                this.pos += 1;
                return current;
            }
        }

        return null;
    }

    private require = (...expected: TokenType[]): Token => {
        const token = this.match(...expected);
        if (!token) {
            throw new Error("");
        }

        return token;
    }
}