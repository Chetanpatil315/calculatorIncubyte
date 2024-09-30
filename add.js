function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let delimiter = /[,\n]/;
    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
        numbers = numbers.substring(delimiterEndIndex + 1);
    }

    const negatives = [];
    const sum = numbers.split(delimiter).reduce((acc, num) => {
        const number = Number(num);
        if (number < 0) {
            negatives.push(number);
        }
        return acc + number;
    }, 0);

    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return sum;
}

module.exports = add;
