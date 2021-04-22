import {ContactRepository} from "../ContactRepository";
import {ContactInfo} from "../Types";

const CONTACT_LIST: {[key:string]:ContactInfo} = {
    "Pepe":{
        name:"Pepe",
        address:"Calle de pepe",
        phone:"+XXXXXXXXXXX"
    },
    "Luis":{
        name:"Luis",
        address:"Calle de luis",
        phone:"+YYYYYYYYYYY"
    },
    "Juan":{
        name:"Juan",
        address:"Calle de juan",
        phone:"+ZZZZZZZZZZZ"
    }
}

export class MemoryBasedContactRepository implements ContactRepository{
    findByName(expr: string): ContactInfo[] {
        return Object.keys(CONTACT_LIST).filter(key=>key.toUpperCase().includes(expr.toUpperCase())).map(key=>CONTACT_LIST[key]);
    }

    getContacts(): ContactInfo[] {
        return Object.values(CONTACT_LIST);
    }


}