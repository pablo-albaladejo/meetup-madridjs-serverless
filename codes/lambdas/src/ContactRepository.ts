import {ContactInfo} from "./Types";

export interface ContactRepository{

    getContacts():ContactInfo[];

    findByName(expr:string):ContactInfo[];
}