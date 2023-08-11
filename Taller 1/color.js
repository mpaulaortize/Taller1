const isHex = require("is-hex-color-code");

console.log(isHex("#FE7FCA")); // Output: true
console.log(isHex("#FE7FCA")); // Output: true
console.log(isHex("invalid")); // Output: false
console.log(isHex("#HHJJZZ")); // Output: false
console.log(isHex("#ACBD")); // Output: false
