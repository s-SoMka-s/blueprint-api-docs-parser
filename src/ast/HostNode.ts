import ExpressionNode from "./ExpressionNode";

export default class HostNode extends ExpressionNode {
    url: string;
    
    public constructor(url: string) {
        super(null);
        this.url = url;
    }
}