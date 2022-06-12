import ExpressionNode from '../../ExpressionNode';

import FormatNode from './format.node';
import HostNode from './host.node';

export class MetadataSectionNode extends ExpressionNode {
    constructor(public format: FormatNode, public host: HostNode) {
        super(null);
    }
}
