const passwordVerifier = require('./password-verifier.js');

test('Password is correct', () => {
    expect(passwordVerifier('Halloot9')).toBe(true);
})

// test('Password should not be blank', () => {
//     expect(isNotBlank('Hoi')).toBe(true)
// })

// test('Password should not be blank', () => {
//     expect(isNotBlank(null)).toBe(false)
// })

// test('Password should contain at least 8 characters', () => {
//     expect(isLessThan8Chars('hoi')).toBe(true);
// })

// test('Password should contain at least 8 characters', () => {
//     expect(isLessThan8Chars("hallooooo")).toBe(false);
// })

// test('Password should contain at least one uppercase', () => {
//     expect(hasUppercase("A")).toBe(true);
// })

// test('Password should contain at least one uppercase', () => {
//     expect(hasUppercase("a")).toBe(false);
// })

// test('Password should contain at least one lowercase', () => {
//     expect(hasLowercase("a")).toBe(true);
// })

// test('Password should contain at least one lowercase', () => {
//     expect(hasLowercase("A")).toBe(false);
// })

// test('Password should contain at least one digit', () => {
//     expect(hasDigit("1")).toBe(true);
// })

// test('Password should contain at least one digit', () => {
//     expect(hasDigit("a")).toBe(false);
// })