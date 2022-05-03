import fs from "fs";
import Lexer from "./Lexer";

const buffer = fs.readFileSync("assets/examples/metadata.example.apib");
const fileContent = buffer.toString();

const lexer = new Lexer(fileContent);
const tokens = lexer.lexAnalisys()
console.log(tokens);
