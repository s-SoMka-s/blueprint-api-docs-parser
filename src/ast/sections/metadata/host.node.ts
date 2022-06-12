import Token from '../../../models/tokens/Token';
import ExpressionNode from '../../ExpressionNode';

export default class HostNode extends ExpressionNode {
    public constructor(token: Token | null) {
        super(token);
    }
}
