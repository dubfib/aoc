let input = ``;

const solve = () => {
    let nums = [];

    const lines = input.split('\n');

    for (const line of lines) {
        const chars = line.split('');
        let cache = [];

        for (const char of chars) {
            if (!isNaN(char)) {
                cache.push(char);
            };
        };

        if (cache.length > 0) {
            nums.push(cache[0] + cache[cache.length - 1]);
        };
    };

    return nums.reduce((a, b) => parseInt(a) + parseInt(b), 0);
};

console.log(`[Part One]: ${solve().toString()}`);

input = input
.replaceAll('eighthree', '83')
.replaceAll('sevenine', '79')
.replaceAll('twone', '21')
.replaceAll('oneight', '18')
.replaceAll('fiveight', '58')
.replaceAll('nineight', '98')
.replaceAll('eightwo', '82')
.replaceAll('one', '1')
.replaceAll('two', '2')
.replaceAll('three', '3')
.replaceAll('four', '4')
.replaceAll('five', '5')
.replaceAll('six', '6')
.replaceAll('seven', '7')
.replaceAll('eight', '8')
.replaceAll('nine', '9');

console.log(`[Part Two]: ${solve().toString()}`);
