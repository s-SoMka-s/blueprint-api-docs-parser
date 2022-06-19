import MsonTypeNode from './mson-type.node';
import { TypeSpecificationNode } from './type-specification.node';

export class TypeDefinitionNode extends MsonTypeNode {
    constructor(public spec: TypeSpecificationNode, public attributes: null) {
        super();
    }
}
