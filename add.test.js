const add = require('./add')
test('return 0 for an empty string',()=>{
    expect(add("")).toBe(0)
})

test('returns the number for a single number', () => {
    expect(add("1")).toBe(1);
});

test('returns the sum for two numbers', () => {
    expect(add("1,2")).toBe(3);
});

test('handles new line as a delimiter', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('supports custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

