import Token from "../models/tokens/Token";
import ExpressionNode from "./ExpressionNode";

export class WordNode extends ExpressionNode {
    constructor(word: Token) {
        super(word);
    }
}