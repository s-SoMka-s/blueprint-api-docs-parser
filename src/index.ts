import fs from 'fs';
import Lexer from './Lexer';
import OpenApiBuilder from './open-api/open-api-builder';
import Parser from './Parser';

const metadata = 'assets/examples/metadata.example.apib';
const apiNameOverview = 'assets/examples/api-name-overview.example.apib';
const resource = 'assets/examples/resource.example.apib';

const twoFirstSections = 'assets/examples/2-first-sections.example.apib';

const buffer = fs.readFileSync(twoFirstSections);
const fileContent = buffer.toString();

const lexer = new Lexer(fileContent);
const tokens = lexer.lexAnalisys();
const parser = new Parser(tokens);
const root = parser.parse();

// build open-api json doc
const builder = new OpenApiBuilder();
builder.setRootAstNode(root);
const doc = builder.build();
const jsonedApi = JSON.stringify(doc);

fs.writeFileSync('api.json', jsonedApi);

console.log(tokens);
