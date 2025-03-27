// AddUtils.js
// This function takes a string of numbers and returns their sum.
export function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = ",";
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = parts[0].substring(2);
        numbers = parts[1];
    }

    const regex = new RegExp(`[${delimiter}\n]`);
    const numArray = numbers.split(regex).map(Number);

    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}