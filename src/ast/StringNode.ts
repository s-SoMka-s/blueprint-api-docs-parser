import ExpressionNode from "./ExpressionNode";
import { WordNode } from "./WordNode";

export class StringNode extends ExpressionNode {
    words: WordNode[] = [];

    constructor() {
        super(null);
    }

    addWord = (word: WordNode) => {
        this.words.push(word);
    }
}