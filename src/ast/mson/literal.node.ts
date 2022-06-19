import Token from '../../models/tokens/Token';
import MsonTypeNode from './mson-type.node';

export class LiteralNode extends MsonTypeNode {
    constructor(public token: Token | null) {
        super();
    }
}
