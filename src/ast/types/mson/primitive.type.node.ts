import { TypeDeclarationNode } from '../../mson/type-declaration/type-declaration.node';
import { IdentifierNode } from '../identifier.node';

export default class PrimitiveTypeNode {
    constructor(
        public identifier: IdentifierNode,
        public type: TypeDeclarationNode
    ) {}
}
