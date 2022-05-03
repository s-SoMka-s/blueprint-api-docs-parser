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

    'THIRD_MARKDOWN_HEADER': new TokenType('THIRD_MARKDOWN_HEADER', '###'),
    'SECOND_MARKDOWN_HEADER': new TokenType('SECOND_MARKDOWN_HEADER', '##'),
    'FIRST_MARKDOWN_HEADER': new TokenType('FIRST_MARKDOWN_HEADER', '#'),
    
    

    // urls
    'HTTP_METHOD': new TokenType('HTTP_METHOD', '(GET|POST|PUT|DELETE)'),
    'URL': new TokenType('URL', "https:\/\/[0-9.a-zA-Z:]*\/"),
    'URI_TEMPLATE': new TokenType('URI_TEMPLATE', '\/[a-zA-Z0-9-\/{}]*'),

    'RESPONSE': new TokenType('RESPONSE', 'Response'),
    'PARAMETERES': new TokenType('PARAMETERES', 'Parameters'),
    'ATTRIBUTES': new TokenType('ATTRIBUTES', 'Attributes'),

    'WORD': new TokenType('WORD', '[0-9A-Za-z]*'),

    // return types
    'APP_JSON': new TokenType('APP_JSON', 'application/json'),

    // symbols
    'COLON': new TokenType('COLON', ":"),
    'SPACE': new TokenType('SPACE', ' '),
    'SEMICOLON': new TokenType('SEMICOLON', ';'),

    'OPENING_PARENTHESIS': new TokenType('OPENING_PARENTHESIS', '\\('),
    'CLOSING_PARENTHESIS': new TokenType('CLOSING_PARENTHESIS', '\\)'),

    'OPENING_SQUARE_BRACKET': new TokenType('OPENING_SQUARE_BRACKET', '\\['),
    'CLOSING_SQUARE_BRACKET': new TokenType('CLOSING_SQUARE_BRACKET', '\\]'),

    'PLUS': new TokenType('PLUS', '\\+'),
    'LINE_BREAK': new TokenType('LINE_BREAK', '\\r\\n'),
    'NUMBER': new TokenType('NUMBER', '[0-9]*'),
}