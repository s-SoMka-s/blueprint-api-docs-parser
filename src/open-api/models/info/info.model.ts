import { IContact } from './contact.model';
import { ILicense } from './license.model';

export interface IInfo {
    title: string;
    description: string;
    termsOfService: string;
    contact: IContact | null;
    license: ILicense | null;
    version: string;
}
