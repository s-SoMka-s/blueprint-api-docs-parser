import { TypeDeclarationNode } from './type-declaration.node';

export class PropertyMemberDeclarationNode extends TypeDeclarationNode {
    constructor(public name: any, public value: any, public description: any) {
        super();
    }
}
