import StatementNode from '../ast/StatementNode';
import { tokenTypesList } from '../models/tokens/TokenType';
import { TokenIterator } from '../token.iterator';
import ApiNameOverviewSectionParser from './api-name-overview.section.parser';
import DataStructuresSectionParser from './data-structures-section.parser';
import IParser from './interfaces/parser.interface';
import MetadataSectionParser from './metadata-section.parser';
import ResourceSectionParser from './resource-section.parser';

export default class DocumentParser implements IParser<StatementNode> {
    _iterator: TokenIterator;

    private _metadataSectionParser: MetadataSectionParser;
    private _apiNameOverviewSectionParser: ApiNameOverviewSectionParser;
    private _resourceSectionParser: ResourceSectionParser;
    private _dataStructuresParser: DataStructuresSectionParser;

    constructor(iterator: TokenIterator) {
        this._iterator = iterator;

        this._metadataSectionParser = new MetadataSectionParser(iterator);
        this._apiNameOverviewSectionParser = new ApiNameOverviewSectionParser(
            iterator
        );
        this._resourceSectionParser = new ResourceSectionParser(iterator);
        this._dataStructuresParser = new DataStructuresSectionParser(iterator);
    }

    parse = (): StatementNode => {
        const root = new StatementNode(null);
        const metadata = this._metadataSectionParser.parse();
        root.addChild(metadata);

        this._iterator.require(tokenTypesList.LINE_BREAK);

        const apiNameOverview = this._apiNameOverviewSectionParser.parse();
        root.addChild(apiNameOverview);

        this._iterator.require(tokenTypesList.LINE_BREAK);

        const resource = this._resourceSectionParser.parse();
        root.addChild(resource);

        return root;
    };
}
