import Token from "../models/tokens/Token";

export default class ExpressionNode {
    token: Token | null;

    constructor(token: Token | null) {
        this.token = token;
    }
}