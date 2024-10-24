// let arr1 = [1, 2, 3, 4, 5];

// let res = arr1
//     .map((element, index) => {
//         return element * 100;
//     })
//     .filter((element, index) => {
//         return element >= 300; // Fixed comparison (element >= 300)
//     })
//     .reduce((firstElement, nextElement) => {
//         return firstElement + nextElement;
//     }, 800);

// console.log(res);


// let arr1 = [100,200,300,400,500];
//          [1,2,3,4,5]

//          [1,2,3]
//          6 + 4 (accumulator)

// let arr1 = [10,20,30,40,50,60,70,80,90,100]
// console.log(arr1.splice(4, 3));

// // delete 100
// console.log(arr1.pop())
// console.log(arr1.splice(0,1))
// console.log(arr1)
// arr1.splice(0, 1, 10, 20)
// console.log(arr1)

// arr1.splice(4,0,50,60,70)
// console.log(arr1)


// let arr1 = [1,11,111,1111,2,22,222,2222,3,33,333,3333]
// arr1.splice(4,2);
// console.log(arr1)       //1, 11, 111, 1111, 222, 2222, 3, 33, 333, 3333]
// arr1.splice(8);
// console.log(arr1)       //  [1, 11, 111, 1111, 222, 2222, 3, 33]

// arr1.splice(-2,2)
// console.log(arr1)       // [1, 11, 111, 1111, 222, 2222]



// findIndex()
// let arr1 = [10,20,30,40,50]
// let i = arr1.findIndex((element,index)=>{
//     return element == 30
// });
// console.log(i)

// let i1 = arr1.findIndex((element,indexe)=>{
//     return element==300
// });
// console.log(i1)


// let arr1 = [10,20,30,40,50]
// arr1.splice(arr1.findIndex((element, index)=>{
//     return element==20;
// }),1);
// console.log(arr1);      //[10, 30, 40, 50]

// // delete 50

// arr1.splice(-1,1)
// console.log(arr1);      //[10, 30, 40]


// delete 10
// arr1.splice(0,1)
// console.log(arr1)       //[30, 40]


// let arr1 = [10,20,30,40,10,20,50]

// let new_arr = arr1.filter((element,index)=>{
//     return arr1.indexOf(element)==index;
// });

// console.log(new_arr)    //[10, 20, 30, 40, 50] // immutability


// let arr1 = [20,30,40];

// arr1.push(50);          //[20, 30, 40, 50]
// console.log(arr1)

// arr1.pop()  
// console.log(arr1)       // [20, 30, 40]

// arr1.shift()
// console.log(arr1)       //[30, 40]


// let arr1 = [10,20,30,40,50,60,70,80,90,100];
// let new_arr1 = arr1.slice(0, 5);
// console.log(new_arr1);

// let new_arr2 = arr1.slice(5);
// console.log(new_arr2);      //[60, 70, 80, 90, 100]

// let final_arr = [...new_arr1, ...new_arr2]
// console.log(final_arr)      //[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// let str = 'Welcome to fullstack';

// console.log(str.slice(-9))
// console.log(str.slice(-12,-9))

// console.log(str.substr(0,7));

// console.log(str.substring(0,7));


// let str = 'KLUniv';
// // console.log(str)
// console.log(
//     str.padStart(10,"*").padEnd(14,"*")
// );


// let arr1 = [10,20,30,40,50]
// // console.log(arr1.includes(30));
// // console.log(arr1.includes(303));

// console.log(
//     arr1.find((element,index) => {
//         return == 200;
//     })
// );


// let arr1 = [10,20,30,40,50];
// let [a,...arr2] = arr1;
// let [b,c,...arr3] = arr2;
// let [d,...arr4] = arr3;
// let [e] = arr4;
// console.log(a, b, c, d, e)



let arr1 = [10];

let arr2 = [...arr1, 20];

let arr3 = [...arr2,30];

console.log(arr3);

// forEach

// arr3.forEach((element,index)=>{
//     console.log(element)
// })


// for...of 
for (let element of arr3){
    console.log(element);
}


//promises


