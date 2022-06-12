import NamedSectionNode from '../../abstract/named.section.node';
import { IdentifierNode } from '../../types/identifier.node';
import IKeywordNode from '../../types/keywords/keyword.node.interface';

export class ResourceGroupSection extends NamedSectionNode {
    constructor(
        public keyword: IKeywordNode | null,
        public identifier: IdentifierNode
    ) {
        super(null);
    }
}
