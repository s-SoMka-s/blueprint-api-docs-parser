import ExpressionNode from "./ExpressionNode";

export default class StatementNode extends ExpressionNode {
    children: ExpressionNode[] = [];

    addChild = (child: ExpressionNode) => {
        this.children.push(child);
    }
}