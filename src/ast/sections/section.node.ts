import NamedSectionNode from '../abstract/named.section.node';
import { IdentifierNode } from '../types/identifier.node';
import keywordNodeInterface from '../types/keywords/keyword.node.interface';

export class SectionNode extends NamedSectionNode {
    description: string = '';
    specificContent: string = '';
    nestedSections: SectionNode[] = [];

    constructor(
        public keyword: keywordNodeInterface | null,
        public identifier: IdentifierNode | null
    ) {
        super(null);
    }

    addChild = (child: SectionNode) => {
        this.nestedSections.push(child);
    };
}
