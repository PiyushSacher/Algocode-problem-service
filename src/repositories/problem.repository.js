const { Problem } = require("../models/index");

async function createProblem(problemData) {
  try {
    const problem = await Problem.create({
      title: problemData.title,
      description: problemData.description,
      testCases: problemData.testCases ? problemData.testCases : []
    });

    return problem;
  } catch (error) {
    console.error("Error creating problem:", error);
    throw error;
  }
}

async function getAllProblems(){
    try{
        return await Problem.find({});
    }catch(error){
        console.error("Error fetching all problems:", error);
        throw error;
    }
}

async function getProblemById(problemId){
  try{
    const problem=await Problem.findOne({_id:problemId});
    if(!problem){
      throw new NotFound("Problem",problemId);
    }
    return problem;
  }catch(error){
    console.error("Error fetching problem by ID:", error);
    throw error;
  }

}
module.exports = {
  createProblem,
  getAllProblems,
  getProblemById
};
