import readline from 'readline';

export async function getUserInput(): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true // Enable terminal mode to mute output
  });

  try {
    return new Promise((resolve, reject) => {
      rl.question("=> ", (sentence) => {
        if (sentence) {
          resolve(sentence);  // Resolve the promise with the user input
        } else {
          reject(new Error("No input provided."));
        }
        rl.close();  // Close the readline interface after getting input
      });
    });
  } catch (e: any) {
    console.log("Error occurred while getting user input.");
    console.log(e);
    process.exit(1);
  }
}

// Example usage:
getUserInput().then((input) => {
  console.log('User Input:', input);
}).catch((error) => {
  console.error('Error:', error.message);
});
