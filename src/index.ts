import fs from "fs";
import Lexer from "./Lexer";

const metadata = "assets/examples/metadata.example.apib";
const apiNameOverview = "assets/examples/api-name-overview.example.apib";

const buffer = fs.readFileSync(apiNameOverview);
const fileContent = buffer.toString();

const lexer = new Lexer(fileContent);
const tokens = lexer.lexAnalisys()
console.log(tokens);
