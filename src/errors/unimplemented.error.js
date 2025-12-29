const BaseError =require("./base.error");
const {StatusCodes} =require("http-status-codes")

class UnImplemented extends BaseError{
    constructor(methodName){
        super("UnImplemented",StatusCodes.NOT_IMPLEMENTED,`${methodName} not implemented`,{})
    }
}

module.exports=UnImplemented;