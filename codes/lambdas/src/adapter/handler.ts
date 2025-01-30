import {APIGatewayProxyHandler} from "aws-lambda";
import {ContactService} from "../ContactService";

const corsHeaders = {
    'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
}

export function handlerList(service:ContactService):APIGatewayProxyHandler{

    return async (event) =>{

        return {

            statusCode: 200,
            headers: corsHeaders,
            body: JSON.stringify(service.getContacts())
        }
    }
}

export function handlerFind(service:ContactService):APIGatewayProxyHandler{

    return async (event) =>{

        let name:string|undefined = event.pathParameters?.name;

        if(!name){

            return {

                statusCode: 400,
                headers: corsHeaders,
                body: "Name es obligatorio"
            }
        }

        return {

            statusCode: 200,
            headers: corsHeaders,
            body: JSON.stringify(service.findByName(name))
        }
    }
}