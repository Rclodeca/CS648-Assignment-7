//STEP 1

function halfNumber(num){
    const half = num / 2;
    console.log(`Half of ${num} is ${half}.`);
    return half;
}

//STEP 2
function squareNumber(num){
    const square = num * num;
    console.log(`The result of squaring the number ${num} is ${square}.`);
    return square;
}

//STEP 3
function percentOf(num1, num2){
    const percent = (num1 / num2) * 100;
    console.log(`${num1} is ${percent}% of ${num2}.`);
    return percent;
}

//STEP 4
function findModulous(num1, num2){
    const mod = num1 % num2;
    console.log(`${mod} is the modulous of ${num1} and ${num2}.`);
    return mod;
}

//STEP 5
function getSum(){
    const nums = window.prompt("Enter the numbers, with commas inbetween");
    const arr = nums.split(",").map(item => parseInt(item.trim(), 10));
    const sum = arr.reduce((a, b) => a + b, 0);
    console.log("Sum is " + sum);
    return sum;
}
