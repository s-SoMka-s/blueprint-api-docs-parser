import fs from "fs";
import Lexer from "./Lexer";
import Parser from "./Parser";

const metadata = "assets/examples/metadata.example.apib";
const apiNameOverview = "assets/examples/api-name-overview.example.apib";
const resource = "assets/examples/resource.example.apib";

const twoFirstSections = "assets/examples/2-first-sections.example.apib";

const buffer = fs.readFileSync(apiNameOverview);
const fileContent = buffer.toString();

const lexer = new Lexer(fileContent);
const tokens = lexer.lexAnalisys()
const parser = new Parser(tokens);
//const root = parser.parse();
console.log(tokens);
