

import { IinterviewData } from "./utils/INTERVIEWER/func/data/interviewData"
import { startInterview } from "./utils/INTERVIEWER/func/takeInterview"
import { readFileContentToVariable } from "./utils/system/readFileToVariable"
import  path from "path" 

console.log("WELCOME TO INTERVIEW AI. THE INTERVIEW WILL START SHORTLY ")
console.log('\n')
console.log("LETS GET YOUR INTERVIEW STARTED") 
console.log('\n')


async function main()
{
    try 
    {
        const candidateResume = await readFileContentToVariable( path.join( __dirname,'./resume.txt') )
        const jobDescription = await readFileContentToVariable( path.join( __dirname,'./jobDescription.txt') ) 

        // Your Interview Details 
        const myInterviewData: IinterviewData = 
               { 
                    candidateFirstname: "ogagaoghene",
                    roleName: "backend developer",
                    experienceLevel:"junior",
                    companyName:"Jobrail",
                    jobDescription,
                    candidateResume 
               }

        startInterview( myInterviewData )
    }
    catch(e: any)
    {
        console.error("PROGRAM_ERROR: ", e )
        process.exit(1) 
    }
}


main() 