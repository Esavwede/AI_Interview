

import { IinterviewData } from "./data/interviewData"
import { runPrompt } from "./promptRunner"


export async function generateNextResponseFromInterviewer( interviewData: IinterviewData, interviewTranscript: string )
{
    try 
    {
       const { candidateFirstname, candidateResume, companyName, jobDescription, experienceLevel, roleName } = interviewData

       const prompt = `
       
       Your_Role: You are an intelligent AI that analyzes the transcript and context of an interview, where the context give details on: the role being applied for, 
       candidate's name, companies name, candidate's experience level, jobDescription, and candidate's resume. And After analyzing the transcript and interview context, 
       you will determine the next response from the interviewer, strictly and I repeat, strictly based on how this interview will flow in a real world interview setting.

       
       Your_Rules: 
       
       - Your response should be in the format:  Interviewer: {interviewer_generated_response_here}. 

       - You must only return a response in the response format specified above. 

       - If the candidate says anything unclear or that does'nt make sense, as for clarification from the candidate

       - If the candidate says any incomplete sentence as for clarification
       

        Now Perform Your Role on the given Interview transcript and Interview Context below: 

        Interview_Context:  The Interviewer is interviewing the candidate, ${candidateFirstname}, for a comapany called, company ${companyName}, 
                            for the role ${roleName} of which the experience level needed is ${experienceLevel}, 
                            where by the job description is ${jobDescription} and the candidate's resume ${candidateResume}. 

        Interview_Transcript: 
                             ${interviewTranscript} 
       `


       const interviewerResponse: string = await runPrompt(prompt)
       return interviewerResponse 
    }
    catch(e: any)
    {
        console.log(`GENERATE_NEXT_AI_RESPONSE_ERROR: ${ e }`)
        process.exit(1) 
    }
}

