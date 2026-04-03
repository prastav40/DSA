var isPowerOfTwo = function(n) {
    // Base Case 1: Powers of two must be positive. 0 or negatives are false.
    if (n <= 0) return false;
    
    // Base Case 2: 2^0 is 1, so if we reach 1, it's a power of two.
    if (n === 1) return true;
    
    // If it's not divisible by 2, it can't be a power of two.
    if (n % 2 !== 0) return false;
    
    // Recursive step: keep dividing by 2.
    return isPowerOfTwo(n / 2);
};

console.log(isPowerOfTwo(16)); // true