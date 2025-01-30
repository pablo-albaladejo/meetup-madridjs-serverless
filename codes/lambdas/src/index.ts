import {ContactRepository} from "./ContactRepository";
import {MemoryBasedContactRepository} from "./impl/MemoryBasedContactRepository";
import {ContactService} from "./ContactService";
import {APIGatewayProxyHandler} from "aws-lambda";
import {handlerFind, handlerList} from "./adapter/handler";

const repository:ContactRepository = new MemoryBasedContactRepository();
const service:ContactService = new ContactService(repository);

export const handlerGetContacts:APIGatewayProxyHandler = handlerList(service);
export const handlerFindByName:APIGatewayProxyHandler = handlerFind(service);