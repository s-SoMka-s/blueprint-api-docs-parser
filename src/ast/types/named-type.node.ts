import ExpressionNode from '../ExpressionNode';
import { IdentifierNode } from './identifier.node';

export default class NamedTypeNode extends ExpressionNode {
    children: NamedTypeNode[] = [];

    constructor(identifier: IdentifierNode, type: string) {
        super(null);
    }

    addChild(node: NamedTypeNode): void {
        this.children.push(node);
    }
}
