import { IdentifierNode } from '../identifier.node';
import TypeNode from './type.node';

export default class PrimitiveTypeNode {
    constructor(public identifier: IdentifierNode, public type: TypeNode) {}
}
