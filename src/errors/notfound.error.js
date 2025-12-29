const BaseError =require("./base.error");
const {StatusCodes} =require("http-status-codes")

class NotFound extends BaseError{
    constructor(resourceName,resourceValue){
        super("Not Found",StatusCodes.NOT_FOUND,`Resource not found: ${resourceName} with value ${resourceValue}`,{
            resourceName,
            resourceValue
        })
    }
}

module.exports=NotFound;