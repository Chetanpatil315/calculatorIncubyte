function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    const delimiterRegex = /[,\n]/;
    return numbers.split(delimiterRegex).reduce((sum, num) => sum + Number(num), 0);
}

module.exports = add;
