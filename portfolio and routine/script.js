// fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (fruit of fruits)
// {
//     console.log(fruit);
// }



// function evennumbers()
// {
//     for (let i = 0; i <= 20; i++)
//     {
//         if (i % 2 == 0)
//         {
//             console.log(i);
//         }

//     }
// }

// evennumbers();


// const evennumbers = (arr) =>
// {
//     for (let i = 0; i <= arr.length; i++)
//     {
//         if (i % 2 == 0)
//         {
//             console.log(i);
//         }

//     }
// }

// evennumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// fruits = ["apple", "banana", "cherry", "date", "elderberry"];


// numbers = [1, 10 ,20,30,50];
// data = numbers.filter(i=> i<=20)
//     console.log(data);



fruits = ["apple", "banana", "cherry", "date", "elderberry"];

data = fruits.filter((fruit, i)=> i%2==0)
    console.log(data);


console.log(...data);
// ...=> Spread Operator

numbers = [1, 10 ,20,30,50];

combinedData = [...fruits, ...numbers]
console.log(combinedData);