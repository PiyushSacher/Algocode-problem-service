const marked=require("marked");
const sanitizeHtml=require("sanitize-html")
const TurndownService=require("turndown");


function sanitizeMarkdown(markdownContent){
    const turndownService=new TurndownService();
    //convert markdown to html
    const convertedHtml=marked.parse(markdownContent);
    

    //santized html
    const sanitizedHtml=sanitizeHtml(convertedHtml,{
        allowedTags:sanitizeHtml.defaults.allowedTags
    })
    const sanitizeMd=turndownService.turndown(sanitizedHtml);
    return sanitizeMd;

}

module.exports=sanitizeMarkdown