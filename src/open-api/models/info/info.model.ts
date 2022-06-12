import { IContact } from "./contact.model";
import { ILicense } from "./license.model";

export interface IInfo {
    title: string;
    description: string;
    termsOfService: string;
    contact: IContact;
    license: ILicense;
    version: string;
}