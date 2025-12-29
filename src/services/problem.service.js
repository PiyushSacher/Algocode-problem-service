const {ProblemRepository}= require("../repositories/index");
const { markdownSanitizer } = require("../utils/index");

async function createProblem(problemData) {
    // sanitize markdown
    problemData.description = markdownSanitizer(problemData.description);

    const problem = await ProblemRepository.createProblem(problemData);
    return problem;
}

async function getAllProblems(){
    return await ProblemRepository.getAllProblems();
}

async function getProblemById(problemId){
  return await ProblemRepository.getProblemById(problemId);
}

module.exports = {
  createProblem,
  getAllProblems,
  getProblemById
};
