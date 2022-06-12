import Token from '../../models/tokens/Token';
import ExpressionNode from '../ExpressionNode';

export class IdentifierNode extends ExpressionNode {
    constructor(token: Token | null) {
        super(token);
    }
}
