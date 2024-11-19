//create array 
//const fruits = ['apple1','apple3','apple4','apple10']; //most common
//let color = new Array("yellow","nigger", "white");

//console.log(fruits);
//console.log(color);

//manipulate array
//push = add to end

//color.push("pink");
//console.log(color);

// pop = remove from end
//color.pop();

// unshift = add to first
//fruits.unshift("orange");
//console.log(fruits);

// shift = remove from first
//fruits.shift();

// length = menghitung data
//document.write(`Total of fruits : ${fruits.length}`);

// sort = berurutan
//document.write(`before sort ${fruits} <br> 
    //after sort : ${fruits.sort()}`); 

// looping array
//for (let start = 0; start < fruits.length; start++) {
   ///document.write(`<br> ${fruits[start]} <br>`);
//}

//let start_while = 0;
//while(start_while < color.length) {
    //document.write(fruits[start_while]);
    //start_while++;
//}

// do while

const fruits = ['PIZZA', 'NIGGA', 'BIGGA', 'CHIGGA'];

let Data = 0;

do {
    const currentFruit = fruits[Data];
    document.write(`Makanan ${Data}: ${currentFruit}<br>`);
    Data++;
} while (Data< fruits.length);
