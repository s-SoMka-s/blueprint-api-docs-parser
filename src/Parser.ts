import { SectionNode, SectionType } from "./ast/SectionNode";
import StatementNode from "./ast/StatementNode";
import { StringNode } from "./ast/StringNode";
import { WordNode } from "./ast/WordNode";
import Token from "./models/tokens/Token";
import TokenType, { tokenTypesList } from "./models/tokens/TokenType";

export default class Parser {
    tokens: Token[];
    pos: number = 0;
    scope: any = {};

    constructor(tokens: Token[]) {
        this.tokens = tokens;
    }

    parse = (): StatementNode => {
        const root = new StatementNode(null);
        while (this.pos < this.tokens.length) {
            const sectionNode = this.parseSection();

            this.require(tokenTypesList.LINE_BREAK);
            this.require(tokenTypesList.LINE_BREAK);

            root.addChild(sectionNode);
        }
        return root;
    }

    private parseSection = (): SectionNode => {
        const type = this.getSectionType();
        const root = new SectionNode(type);

        return root;
    }

    private getSectionType = (): SectionType => {
        return SectionType.META_DATA;
    }

    private parseString = (pos: number): StringNode => {
        const root = new StringNode();
        do {
            const token = this.tokens[pos]
            switch (token.type) {
                case tokenTypesList.WORD:
                    const word = this.parseWord(token);
                    root.addWord(word);
                    pos += 1;
                    break;
                case tokenTypesList.LINE_BREAK:
                    return root;
            }
        } while(true);
    }

    private parseWord = (token: Token): WordNode => {
        return new WordNode(token);
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