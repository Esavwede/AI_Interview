

import { INTERVIEW_COMPLETE_CHECKER } from "../../../INTERVIEWER/roles/interviewer";
import { runPrompt } from "./promptRunner";


export async function checkInterviewCompleted( interviewTranscript: string ): Promise<boolean> 
{
   try 
   {
        // Prepend Interview Transcript To Interview Checker Role 
        var prompt = INTERVIEW_COMPLETE_CHECKER + '\n' + interviewTranscript

        var interviewCompleted: string = await runPrompt(prompt)  /** INFO: returns a string: "true" or "false" */

        // Convert "true" or "false" String To Boolean
        const interviewCompletedBoolean = Boolean(interviewCompleted) 

        if( typeof interviewCompletedBoolean !== 'boolean' ) 
        {
            console.log("CHECK_INTERVIEW_COMPLETE_ERROR: MODEL did not return a boolean ") 
            process.exit(1) // EXIT PROGRAM 
        }


        var finalResult: any = undefined 

        if( interviewCompleted === 'true' ){ finalResult = true }
        if( interviewCompleted === 'false' ){ finalResult = false }

        return finalResult
       
   }
   catch(e: any)
   {
        console.log(`CHECK_INTERVIEW_COMPLETE: ${ e } `)
        process.exit(1) 
   }
}