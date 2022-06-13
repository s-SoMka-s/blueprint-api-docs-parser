import NamedSectionNode from '../../abstract/named.section.node';
import { IdentifierNode } from '../../types/identifier.node';
import IKeywordNode from '../../types/keywords/keyword.node.interface';
import { SectionNode } from '../section.node';

export default class ApiNameOverviewSectionNode extends SectionNode {
    constructor(
        public keyword: IKeywordNode | null,
        public identifier: IdentifierNode
    ) {
        super(keyword, identifier);
    }
}
