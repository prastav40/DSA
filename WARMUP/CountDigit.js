function countdigit(n) {
    let count = 0;
    let num = Math.abs(n);

    if (num > 0 && num < 1) {
        return "It is a number between 0 and 1; precision handling varies.";
    }

    if (num === 0) {
        return 1;
    }

    while (num >= 1) {
        num = Math.floor(num / 10);
        count++;
    }

    return count;
}

console.log(countdigit(0.01));  