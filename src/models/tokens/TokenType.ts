import Token from "./Token";

export default class TokenType {
    name: string;
    regex: string;


    constructor(name: string, regex: string) {
        this.name = name;
        this.regex = regex;
    }
}

export const tokenTypesList = {
    // metadata section
    'FORMAT': new TokenType('FORMAT', 'FORMAT'),
    'HOST': new TokenType('HOST', "HOST"),

    'FIRST_MARKDOWN_HEADER': new TokenType('FIRST_MARKDOWN_HEADER', '#'),
    'SECOND_MARKDOWN_HEADER': new TokenType('SECOND_MARKDOWN_HEADER', '##'),
    'THIRD_MARKDOWN_HEADER': new TokenType('THIRD_MARKDOWN_HEADER', '###'),

    'URL': new TokenType('URL', "https:\/\/[0-9.a-zA-Z:]*\/"),

    'WORD': new TokenType('WORD', '[0-9A-Za-z]*'),

    'COLON': new TokenType('COLON', ":"),
    'SPACE': new TokenType('SPACE', ' '),
    
    'SEMICOLON': new TokenType('SEMICOLON', ';'),
    'LINE_BREAK': new TokenType('LINE_BREAK', '\\r\\n'),
}