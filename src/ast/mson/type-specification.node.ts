import MsonTypeNode from './mson-type.node';
import { TypeNameNode } from './type-name.node';

export class TypeSpecificationNode extends MsonTypeNode {
    constructor(public typeName: TypeNameNode, public list: null) {
        super();
    }
}
