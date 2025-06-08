const getHello = (s:string) : string => {
  return "Hello, World!";
}

const heroes =['Superman', 'Batman', 'Thor', 'Ironman'];

heroes.map((hero) => {
  return hero.toUpperCase();
});

function consoleError(message: string): void { // This function takes a string message and returns nothing (void)
  // It is used to log error messages to the console
  // This is useful for debugging or error handling in applications
  console.error(message);
}


function handleError(error: string): never { // This function takes an Error object and never returns
  // It is used to handle errors in a way that the program will not continue execution
  // This is useful for critical errors where the program cannot recover
  throw new Error(error); // Throwing the error will stop the execution of the program
}

export {}