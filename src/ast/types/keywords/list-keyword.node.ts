import Token from '../../../models/tokens/Token';
import IKeywordNode from './keyword.node.interface';

export default class ListKeywordNode implements IKeywordNode {
    token: Token;

    constructor(token: Token) {
        this.token = token;
    }
}
