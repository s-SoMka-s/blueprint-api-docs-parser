import Token from '../../../models/tokens/Token';
import ExpressionNode from '../../ExpressionNode';
import IKeywordNode from './keyword.node.interface';

export default class HeaderKeywordNode
    extends ExpressionNode
    implements IKeywordNode
{
    token: Token;

    constructor(token: Token) {
        super(null);
        this.token = token;
    }
}
