import ExpressionNode from "./ExpressionNode";

export enum SectionType {
    META_DATA,
    OVERVIEW,
    RESOURCE
}

export class SectionNode extends ExpressionNode {
    type: SectionType;
    children: ExpressionNode[] = [];

    constructor(type: SectionType){
        super(null);

        this.type = type;
    }

    addChild = (child: ExpressionNode) => {
        this.children.push(child);
    }    
}