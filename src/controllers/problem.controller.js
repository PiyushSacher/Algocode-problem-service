const {StatusCodes} =require("http-status-codes");
const {ProblemService}=require("../services/index");

async function addProblem(req, res, next) {
  try {
    console.log("Adding new problem:", req.body);
    const newProblem = await ProblemService.createProblem(req.body);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      error: {},
      data: newProblem
    });
  } catch (err) {
    next(err);
  }
}

async function getProblem(req,res,next){
    const problemId=req.params.id;
    const problem=await ProblemService.getProblemById(problemId);
    return res.status(StatusCodes.OK).json({
        success:true,
        error:{},
        data:problem
    });
}

async function getProblems(req,res,next){
    console.log("Fetching all problems");
    const allProblems=await ProblemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
        success:true,
        error:{},
        data:allProblems
    });
}

function deleteProblem(req,res,next){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:"Not implemented"});

}

function updateProblem(req,res,next){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:"Not implemented"});

}

module.exports={addProblem,getProblem,getProblems,deleteProblem,updateProblem}