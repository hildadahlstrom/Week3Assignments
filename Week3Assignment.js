
//Number 1
//a
let ages = [3,9,23,64,2,8,28,93];
console.log(ages[ages.length-1]-ages[0]);
//b
ages.push(75);
console.log(ages[ages.length-1]-ages[0]);
//b
let total1 = 0;
for(let i = 0; i <ages.length;i++){
    total1 +=ages[i];
}
console.log(total1/ages.length);

//Number 2
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//a
let lengths = names.map(function(element){
    return element.length;
});
let total2 = 0;
for(let i = 0; i < lengths.length; i++){
    total2+= lengths[i];
}
console.log(total2/lengths.length);
//b
let allNames ='';
for(let i = 0; i < names.length;i++){
    allNames = allNames + names[i];
}
console.log(allNames);

//Number 3
console.log(names[names.length-1]);

//Number 4
console.log(names[0]);

//Number 5
let nameLengths = [];
for(let i= 0; i < names.length;i++){
    nameLengths.push(names[i].length);
}

//Number 6
let total6 = 0;
for(let i = 0; i < nameLengths.length;i++){
    total6+=nameLengths[i];
}
console.log(total6);

//Number 7
function concatWords(word,n){
    let fin = '';
    for(let i = 0; i<n;i++){
        fin= fin+word;
    }
    return fin;
}

//Number 8
function returnFullName(firstName,lastName){
    return firstName + " " + lastName;
}

//Number 9
function totalOver100(numbers){
    let total9 = 0;
    for(let i = 0; i < numbers.length; i++){
        total9+=numbers[i];
    }
    if(total9 > 100){
        return true;
    }
    else{
        return false;
    }
}

//Number 10
function average(numbers){
    let tot10 = 0;
    for(let i = 0; i < numbers.length; i++){
        tot10+=numbers[i];
    }
    return tot10/numbers.length;

}

//Number 11
function compareAverage(arr1,arr2){
    let avgArr1 = average(arr1);
    let avgArr2 = average(arr2);
    return avgArr1 > avgArr2;
}

//Number 12
function willBuyDrink(isHotOutside,moneyInPocket){
    if(isHotOutside && moneyInPocket>10.50){
        return true;
    }
    else{
        return false;
    }
}

//Number 13
function getHighest(arr13){
    arr13 = arr13.sort(function(a,b){
        return a-b;
    });
    return arr13[arr13.length-1];
}
/*
This function takes in an array of numbers and returns the highest number value 
I made the function because it can be helpful to find the highest number in a series 
*/