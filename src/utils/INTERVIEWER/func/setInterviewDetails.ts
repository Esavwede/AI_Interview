

import { IinterviewData } from "./data/interviewData"

export function setInterviewDetails( interviewData: IinterviewData )
{
    try 
    {
        const { candidateFirstname, candidateResume, companyName, jobDescription } =  interviewData     

        const context = `
                ROLE: You are an Expert Interviewer with over 40+ years of experience in helping companies interview candidates and
                determine wether the candidate is a good fit for the company based on the company's job description. 

                Instructions: You are to help ${companyName} interview the candidate, ${candidateFirstname}, to determine if they are a good fit
                for the job role based on this job description: ${ jobDescription }. 
                
                This is ${candidateFirstname}'s Resume: ${candidateResume} 
                `

        return context 
    }
    catch(e: any)
    {
        console.log("SET_INTERVIEW_DETAILS_ERROR: \n" + e ) 
    }
}