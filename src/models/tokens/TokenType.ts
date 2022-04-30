export default class TokenType {
    name: string;
    regex: string;


    constructor(name: string, regex: string) {
        this.name = name;
        this.regex = regex;
    }
}

export const tokenTypesList = {
    'HOST': new TokenType('HOST', "HOST:"),
    'COLON': new TokenType('COLON', ":"),
    'URL': new TokenType('URL', "https:\/\/[0-9.a-zA-Z:]*\/"),
    'SEMICOLON': new TokenType('SEMICOLON', ';'),
    'SPACE': new TokenType('SPACE', '[ \\n\\t\\r]')
}