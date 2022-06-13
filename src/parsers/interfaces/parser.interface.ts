import { TokenIterator } from '../../token.iterator';

export default interface IParser<TNode> {
    _iterator: TokenIterator;

    parse(): TNode;
}
