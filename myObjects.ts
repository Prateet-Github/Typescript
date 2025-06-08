const User = {
  name: "John Doe",
  age: 30,
 isActive : true,
}

function createUser({name: string, isActive: boolean}) {}

let newUser = {name: "Jane Doe", isActive: true}

createUser(newUser); 

function createCourse():{name: string, isActive: boolean}{
  return {name: "TypeScript Basics", isActive: true};
}

export {}