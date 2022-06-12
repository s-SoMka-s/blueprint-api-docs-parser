import Token from '../../../models/tokens/Token';
import ExpressionNode from '../../ExpressionNode';

export default class FormatNode extends ExpressionNode {
    constructor(token: Token) {
        super(token);
    }
}
