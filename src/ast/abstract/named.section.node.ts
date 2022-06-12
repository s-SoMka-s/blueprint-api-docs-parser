import ExpressionNode from '../ExpressionNode';
import { IdentifierNode } from '../types/identifier.node';
import IKeywordNode from '../types/keywords/keyword.node.interface';

export default abstract class NamedSectionNode extends ExpressionNode {
    abstract keyword: IKeywordNode | null;
    abstract identifier: IdentifierNode | null;
}
