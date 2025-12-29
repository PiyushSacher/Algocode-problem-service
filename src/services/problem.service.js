const {ProblemRepository}= require("../repositories/index");
const { markdownSanitizer } = require("../utils/index");

async function createProblem(problemData) {
  try {
    // sanitize markdown
    problemData.description = markdownSanitizer(problemData.description);

    const problem = await ProblemRepository.createProblem(problemData);
    return problem;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getAllProblems(){
    return await ProblemRepository.getAllProblems();
}

module.exports = {
  createProblem,
  getAllProblems
};
