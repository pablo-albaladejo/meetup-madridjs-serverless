import {ContactRepository} from "./ContactRepository";
import {ContactInfo} from "./Types";

export class ContactService{

    repository:ContactRepository;

    constructor(repository: ContactRepository) {
        this.repository = repository;
    }

    getContacts():ContactInfo[]{

        return this.repository.getContacts();
    }

    findByName(name:string):ContactInfo[]{

        if(!name){
            throw new Error("name is mandatory");
        }


        return this.repository.findByName(name);
    }
}