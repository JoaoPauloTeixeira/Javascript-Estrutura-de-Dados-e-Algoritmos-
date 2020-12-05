//Criando e inicializando arrays
// var avgTemp = [];

// avgTemp[0] = 31.9;
// avgTemp[1] = 34.5;
// avgTemp[2] = 42;
// avgTemp[3] = 29;
// avgTemp[4] = 25.2;

// console.log(avgTemp[2]);

// var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// for(i = 0; i < daysOfWeek.length; i++) {
//     console.log(daysOfWeek[i]);
// }

//Acessando elementos através da iteração
// var fibonacci = [];

// fibonacci[0] = 0;
// fibonacci[1] = 1;
// fibonacci[2] = 1;

// for(i = 3; i < 20; i++){
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2] ;
// }
// console.log(fibonacci);

//Inserindo elementos
// var numbers = [1,2,3,4,5];

// numbers.push(45);
// numbers.unshift(-1);

// console.log(numbers);

// //Removendo elementos
// numbers.pop();
// numbers.shift();

// console.log(numbers);

// //Removendo e adicionando elementos em indices especificos
// numbers.splice(2, 3);
// numbers.splice(2, 0, 100, 200, '300');

// console.log(numbers);

// //Array bidimensional

//Array bidimensional
// var tempWeek = [];

// var tempWeek1 = [33, 29, 25, 33.5, 27.8, 25, 31.8, 22.8];
// var tempWeek2 = [31, 23, 35, 23.5, 23.8, 25, 35.8, 17.8];

// tempWeek[0] = tempWeek1;
// tempWeek[1] = tempWeek2;

// console.log(tempWeek[1][4]);

// for(i = 0; i < tempWeek.length; i++) {
//     for(j = 0; j < tempWeek[i].length; j++) {
//         console.log(tempWeek[i][j])
//     }
// }

//Array tridimensional
var month = [];
var firstWeeks = [];
var lastWeeks = [];

var tempWeek1 = [33, 29, 25, 33.5, 27.8, 25, 31.8, 22.8];
var tempWeek2 = [31, 23, 35, 23.5, 23.8, 25, 35.8, 17.8];

var tempWeek3 = [23, 22, 31, 21.5, 23.8, 34, 31, 18.8];
var tempWeek4 = [23, 32, 32, 25.5, 21.8, 25, 31.8, 10.8];

firstWeeks = [tempWeek1, tempWeek2];
lastWeeks = [tempWeek3, tempWeek4];

month = [firstWeeks, lastWeeks];

for(var x = 0; x < month.length; x++){
    for(var y = 0; y < month[x].length; y++){
        for(var z = 0; z < month[x][y].length; z++){
            console.log(month[x][y][z])
        }
    }
}
