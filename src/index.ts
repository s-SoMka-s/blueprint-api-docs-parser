import fs from 'fs';
import { parse } from 'path';
import Lexer from './Lexer';
import OpenApiBuilder from './open-api/open-api-builder';
import ApiNameOverviewSectionParser from './parsers/api-name-overview.section.parser';
import DocumentParser from './parsers/document.parser';
import MetadataSectionParser from './parsers/metadata-section.parser';
import MsonTypesParser from './parsers/types/mson-types.parser';
import { TokenIterator } from './token.iterator';

const metadata = 'assets/examples/metadata.example.apib';
const apiNameOverview = 'assets/examples/api-name-overview.example.apib';
const resource = 'assets/examples/resource.example.apib';
const renters = 'assets/examples/renters.api.apib';
const mson = 'assets/examples/mson.example.apib';
const twoFirstSections = 'assets/examples/2-first-sections.example.apib';

const buffer = fs.readFileSync(metadata);
const fileContent = buffer.toString();

const lexer = new Lexer(fileContent);
const tokens = lexer.lexAnalisys();
const tokenIterator = new TokenIterator(tokens);
// const parser = new DocumentParser(tokenIterator);
//const parser = new MsonTypesParser(tokenIterator);
const parser = new MetadataSectionParser(tokenIterator);
const root = parser.parse();
console.log(root);

// build open-api json doc
const builder = new OpenApiBuilder();
builder.setRootAstNode(root);
const doc = builder.build();
const jsonedApi = JSON.stringify(doc);

fs.writeFileSync('api.json', jsonedApi);
