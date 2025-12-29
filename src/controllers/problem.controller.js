const {StatusCodes} =require("http-status-codes");
const UnImplemented = require("../errors/unimplemented.error");

function addProblem(req,res,next){
    try{
        throw new UnImplemented("Add Problem not implemented");
    }catch(err){
        next(err);
    }
}

function getProblem(req,res,next){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:"Not implemented"});

}

function getProblems(req,res,next){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:"Not implemented"});

}

function deleteProblem(req,res,next){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:"Not implemented"});

}

function updateProblem(req,res,next){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:"Not implemented"});

}

module.exports={addProblem,getProblem,getProblems,deleteProblem,updateProblem}