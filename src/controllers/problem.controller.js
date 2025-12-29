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

async function deleteProblem(req,res,next){
    const deletedProblem=await ProblemService.deleteProblemById(req.params.id);
    return res.status(StatusCodes.OK).json({
        success:true,
        error:{},
        data:deletedProblem
    });
}

function updateProblem(req,res,next){
    
}



module.exports={addProblem,getProblem,getProblems,deleteProblem,updateProblem}