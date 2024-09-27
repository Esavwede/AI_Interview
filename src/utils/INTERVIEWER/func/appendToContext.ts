



export function appendMessageToInterviewContext( context: string, message: string )
{
    try 
    {
        return context + '\n' + message
    }
    catch(e: any)
    {
        console.log(`Error Occured while appending to context`)
        console.log(e) 
    }
}