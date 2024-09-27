


import fs from "fs/promises" 


export async function readFileContentToVariable( filePath: string ): Promise<string> 
{
    try 
    {
        // Read the content of the file asynchronously using promises
        return await fs.readFile(filePath, 'utf8');

    } catch (err) {
        console.error('Error reading the file:', err);
        process.exit(1) 
    }
}

