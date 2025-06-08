// •	<T> is the generic type parameter.
// •	value: T means the input is of type T.
// •	: T after the parentheses means the return value is also of type T.
var identity = function (value) {
    return value;
};
var result1 = identity(42); // ✅ 42
var result2 = identity("hello"); // ✅ "hello"
