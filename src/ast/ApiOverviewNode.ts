import ExpressionNode from "./ExpressionNode";
import { StringNode } from "./StringNode";

export class ApiOverviewNode extends ExpressionNode {
    stringNode: StringNode;

    constructor(stringNode: StringNode) {
        super(null);
        this.stringNode = stringNode;
    }
}