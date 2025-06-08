type User = {
  name: string;
  age?: number;
};

const user1: User = { name: "Alex" };         // ✅ 'age' is optional
const user2: User = { name: "Alex", age: 30 }; // ✅ valid too

export {};