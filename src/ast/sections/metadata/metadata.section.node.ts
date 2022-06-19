import { SectionNode } from '../section.node';

import FormatNode from './format.node';
import HostNode from './host.node';

export class MetadataSectionNode extends SectionNode {
    constructor(public format: FormatNode, public host: HostNode) {
        super(null, null);
    }

    public getHost(): string {
        if (!this.host.token) {
            return '';
        }

        return this.host.token.text;
    }
}
