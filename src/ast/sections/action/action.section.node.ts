import NamedSectionNode from '../../abstract/named.section.node';
import { IdentifierNode } from '../../types/identifier.node';
import HeaderKeywordNode from '../../types/keywords/header-keyword.node';
import IKeywordNode from '../../types/keywords/keyword.node.interface';
import { SectionNode } from '../section.node';

export default class ActionSectionNode extends SectionNode {
    keyword: IKeywordNode | null = null;

    constructor(
        public identifier: IdentifierNode | null,
        public httpRequestMethod: HeaderKeywordNode | null,
        public uriTemplate: HeaderKeywordNode
    ) {
        super(null, identifier);
    }
}
