const BaseError =require("./base.error");
const {StatusCodes} =require("http-status-codes")

class BadRequest extends BaseError{
    constructor(propertyName,details){
        super("BadRequest",StatusCodes.BAD_REQUEST,`Invalid structure for ${propertyName} required`,details)
    }
}

module.exports=BadRequest;