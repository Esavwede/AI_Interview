

import { checkInterviewCompleted } from "./checkInterviewCompleted"
import { appendMessageToInterviewTranscript } from "./appendMessageToInterviewTranscript"
import { getUserInput } from "./getUserInputFromTerminal"
import { prependStringToCandidateResponse } from "./prependToCandidateResponse"
import { generateNextResponseFromInterviewer } from "./generateNextResponseFromInterviewContext"
import { IinterviewData } from "./data/interviewData"


const firstSystemMessage: string = 'INTERVIEW: You are welcomed to the interview'


export async function startInterview( interviewData: IinterviewData )
{
    try 
    {
        // Current Interview Completion Status 
        let interiewIsComplete: boolean = false

        // Initialized Transcript For Interview
        let interviewTranscript = '' 

        // Append First From Interviewer to Transcript 
        interviewTranscript = appendMessageToInterviewTranscript( interviewTranscript, firstSystemMessage )

        // Log First Message To User Terminal || Send First Message to User 
        console.log(`${ firstSystemMessage }`)

        // Get Candidate Response from Terminal || Other Medium 
        var candidateResponse = await getUserInput()

        // Prepend "candidate:" to candidate response 
        candidateResponse = prependStringToCandidateResponse('Candidate:', candidateResponse )

        // Append candidate response to Transcript 
        interviewTranscript = appendMessageToInterviewTranscript( interviewTranscript, candidateResponse )
        

        /** Main Loop */
        while( interiewIsComplete === false )
        {
            // Determine if context is complete 
            const interviewCompleted: boolean = await checkInterviewCompleted( interviewTranscript )

            if( !interviewCompleted  )
            {
                            
                            // Generate Next Response From Interviewer 
                            const interviewerResponse: string =  await generateNextResponseFromInterviewer( interviewData, interviewTranscript)

                            console.log('\n') 
                            console.log( interviewerResponse )
                            console.log('\n')

                            // Append Generated Interviewer Message To Current Interview Transcript 
                            interviewTranscript = appendMessageToInterviewTranscript( interviewTranscript, interviewerResponse  )

                            // Get Candidate Response 
                            var candidateResponse = await getUserInput()

                            // Prepend "candidate:" to candidate response 
                            candidateResponse = prependStringToCandidateResponse('candidate:', candidateResponse )

                            // Append Candidate Response To Interview Transcript 
                            interviewTranscript = appendMessageToInterviewTranscript( interviewTranscript, candidateResponse )

            }else{
                
                            // Interview Completed 
                            console.log("Interview Completed")
                            
                            // Save Entire Interview Context 
                            console.log( interviewTranscript ) 

                            // End Program 
                            interiewIsComplete = true 
                            break;
                            
            }
            
            // Execution Flow Here ? Interview Not Complete. 
            // Return to While Loop Top ^       
        }

            // Execution Flow Here ? Interview Complete 
            console.log("INTERVIEW COMPLETED SUCCESSFULLY !")
            process.exit(0) 
    }
    catch(e: any)
    {
        console.log("Error Occured While Starting Interview") 
        console.log(e)
    }
}