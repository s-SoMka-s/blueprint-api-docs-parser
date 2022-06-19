import Token from '../../models/tokens/Token';
import MsonTypeNode from '../mson/mson-type.node';

export default class DescriptionNode extends MsonTypeNode {
    constructor(public token: Token) {
        super();
    }
}
