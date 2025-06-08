	// •	<T> is the generic type parameter.
	// •	value: T means the input is of type T.
	// •	: T after the parentheses means the return value is also of type T.

   const identity = <T>(value: T): T => {
  return value;
};

const result1 = identity<number>(42);     // ✅ 42
const result2 = identity<string>("hello"); // ✅ "hello"