import Token from '../../models/tokens/Token';

export class IdentifierNode {
    token: Token;

    constructor(token: Token) {
        this.token = token;
    }
}
