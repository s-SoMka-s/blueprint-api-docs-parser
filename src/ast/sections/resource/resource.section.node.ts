import { IdentifierNode } from '../../types/identifier.node';
import HeaderKeywordNode from '../../types/keywords/header-keyword.node';
import ActionSectionNode from '../action/action.section.node';

export class ResourceSection extends ActionSectionNode {
    constructor(
        public identifier: IdentifierNode | null,
        public httpRequestMethod: HeaderKeywordNode | null,
        public uriTemplate: HeaderKeywordNode,
        public actions: ActionSectionNode[]
    ) {
        super(identifier, httpRequestMethod, uriTemplate);
    }
}
