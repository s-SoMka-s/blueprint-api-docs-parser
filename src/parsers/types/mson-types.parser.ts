import { isTypeLiteralNode } from 'typescript';
import { LiteralNode } from '../../ast/mson/literal.node';
import MsonTypeNode from '../../ast/mson/mson-type.node';
import { NamedDeclarationNode } from '../../ast/mson/type-declaration/named-declaration.node';
import { PropertyMemberDeclarationNode } from '../../ast/mson/type-declaration/property-member-declaration.node';
import { TypeDeclarationNode } from '../../ast/mson/type-declaration/type-declaration.node';
import { TypeDefinitionNode } from '../../ast/mson/type-definition.node';
import { TypeNameNode } from '../../ast/mson/type-name.node';
import { ValueNode } from '../../ast/mson/value.node';
import { ValuesListNode } from '../../ast/mson/values-list.node';
import { VariableTypeNameNode } from '../../ast/mson/variable-type-name.node';
import { VariableValueNode } from '../../ast/mson/variable-value.node';
import DescriptionNode from '../../ast/types/description.node';
import PrimitiveTypeNode from '../../ast/types/mson/primitive.type.node';
import TypeNode from '../../ast/types/mson/type.node';
import Token from '../../models/tokens/Token';
import { tokenTypesList } from '../../models/tokens/TokenType';
import { TokenIterator } from '../../token.iterator';
import BaseParser from '../base/base.parser';

export default class MsonTypesParser extends BaseParser {
    constructor(iterator: TokenIterator) {
        super(iterator);
    }

    private parseTypeDeclaration(): TypeDeclarationNode {
        return new TypeDeclarationNode();
    }

    // <NamedDeclaration> | <GenericNamedDeclaration>
    public parseNamedType(): MsonTypeNode {
        const namedDeclaration = this.parseNamedDeclaration();

        return namedDeclaration;
    }

    // # <TypeName> <TypeDefinition>
    private parseNamedDeclaration(): NamedDeclarationNode {
        this._iterator.require(tokenTypesList.FIRST_MARKDOWN_HEADER);
        const typeName = this.parseTypeName();
        const typeDefinition = this.parseTypeDefinition(); // optional

        return new NamedDeclarationNode(typeName, typeDefinition); // NamedDeclarationNode
    }

    // # <TypeName> <VariableTypeSpecification>
    private parseGenericNamedDeclaration(): void {
        this._iterator.require(tokenTypesList.FIRST_MARKDOWN_HEADER);
        const typeName = this.parseTypeName();
        const specification = this.parseVariableTypeSpecification(); // optional

        return; //GenericNamedDeclarationNode
    }

    // - <PropertyName> : <ValueDefinition> - <Description>
    private parsePropertyMemberDeclaration(): PropertyMemberDeclarationNode {
        this._iterator.require(tokenTypesList.DASH);
        const name = this.parsePropertyName();
        let def = null;
        if (this._iterator.match(tokenTypesList.COLON)) {
            this._iterator.require(tokenTypesList.COLON);
            def = this.parseValueDefinition(); // optional
        }

        let description = null;
        if (this._iterator.match(tokenTypesList.DASH)) {
            this._iterator.require(tokenTypesList.DASH);
            description = this.parseDescription(); // optional
        }

        return new PropertyMemberDeclarationNode(name, def, description); // PropertyMemberDeclarationNode
    }

    private parseValueMemberDeclaration(): void {}

    private parseTypeName(): TypeNameNode {
        const literal = this.parseLiteral();
        if (literal) {
            return literal;
        }

        const variableTypeName = this.parseVariableTypeName();
        if (variableTypeName) {
            return variableTypeName;
        }

        return new TypeNameNode();
    }

    private parseTypeDefinition(): TypeDefinitionNode {
        return new TypeDefinitionNode();
    }

    private parseVariableTypeSpecification(): void {}

    private parseVariableTypeName(): VariableTypeNameNode {
        this._iterator.require(tokenTypesList.STAR);
        const literal = this.parseLiteral();
        this._iterator.require(tokenTypesList.STAR);

        return new VariableTypeNameNode(literal);
    }

    // <Literal> | <VariablePropertyName>
    private parsePropertyName(): void {
        const literal = this.parseLiteral();
        if (literal) {
            return; // PropertyNameNode
        }

        this._iterator.require(tokenTypesList.STAR);
        const name = this.parseValueDefinition();
        this._iterator.require(tokenTypesList.STAR);
        return; // PropertyNameNode
    }

    // <Value> | <TypeDefinition>
    private parseValueDefinition(): void {
        const value = this.parseValue();
        if (value) {
            return; // ValueDefinition
        }

        const typeDefinition = this.parseTypeDefinition();
        return; // ValueDefinition
    }

    // - <markdown formatted line>
    private parseDescription(): DescriptionNode {
        this._iterator.require(tokenTypesList.DASH);
        const token = new Token(tokenTypesList.STRING, '', 1);
        this._iterator.require(tokenTypesList.LINE_BREAK);

        return new DescriptionNode(token);
    }

    private parseLiteral(): LiteralNode | null {
        return null;
    }

    // * <Value> *
    private parseVariableValue(): VariableValueNode {
        this._iterator.require(tokenTypesList.STAR);
        const literal = this.parseLiteral();
        this._iterator.require(tokenTypesList.STAR);

        return new VariableValueNode(); // VariableValueNode
    }

    // <Literal> | <VariableValue> | <ValuesList>
    private parseValue(): ValueNode {
        const literal = this.parseLiteral();
        if (literal) {
            return new LiteralNode(); // ValueNode
        }

        const variable = this.parseVariableValue();
        if (variable) {
            return new VariableValueNode(); // ValueNode
        }

        const list = this.parseValuesList();
        return new ValuesListNode(); // ValuesList
    }

    // <Value> | <Value>, <ValuesList>
    private parseValuesList(): ValuesListNode {
        const value = this.parseValue();
        if (this._iterator.match(tokenTypesList.COMMA)) {
            this._iterator.require(tokenTypesList.COMMA);
            const list = this.parseValuesList();
        }

        return new ValuesListNode(); // ValuesList
    }

    // + name (string)
    private parsePrimitive(): PrimitiveTypeNode {
        const identifier = this.parseIdentifier();
        const type = this.parseTypeDeclaration();

        return new PrimitiveTypeNode(identifier, type);
    }

    // private parseTypeDeclaration(): TypeNode {
    //     this._iterator.require(tokenTypesList.OPENING_PARENTHESIS);
    //     const matched = this._iterator.match(
    //         tokenTypesList.STRING,
    //         tokenTypesList.NUMBER,
    //         tokenTypesList.BOOLEAN
    //     );
    //     this._iterator.require(tokenTypesList.CLOSING_PARENTHESIS);

    //     return new TypeNode(matched);
    // }
}
