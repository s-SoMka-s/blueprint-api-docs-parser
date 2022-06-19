import { LiteralNode } from './literal.node';
import MsonTypeNode from './mson-type.node';

export class VariableTypeNameNode extends MsonTypeNode {
    constructor(literal: LiteralNode | null) {
        super();
    }
}
