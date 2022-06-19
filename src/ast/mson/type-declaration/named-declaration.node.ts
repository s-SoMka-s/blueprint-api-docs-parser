import { TypeDefinitionNode } from '../type-definition.node';
import { TypeNameNode } from '../type-name.node';
import { TypeDeclarationNode } from './type-declaration.node';

export class NamedDeclarationNode extends TypeDeclarationNode {
    constructor(
        public name: TypeNameNode,
        public definition: TypeDefinitionNode
    ) {
        super();
    }
}
