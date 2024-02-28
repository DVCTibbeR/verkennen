for (let index = 1; index <= 10; index++) {
    document.getElementById('tafel').innerHTML += index+' * 7 = '+(index*7)+'<br/>';
}

let lijst_met_autos = ['BMW', 'Ford', 'Volvo', 'Volkswagen'];

document.getElementById('array1').innerHTML = lijst_met_autos;

for (let index = 0; index < lijst_met_autos.length; index++) {
    document.getElementById('array2').innerHTML += lijst_met_autos[index]+'<br/>';
}

lijst_met_autos.push('Kia');
for (let index = 0; index < lijst_met_autos.length; index++) {
    document.getElementById('array3').innerHTML += lijst_met_autos[index]+'<br/>';
}

let eerste_item = lijst_met_autos.shift();
for (let index = 0; index < lijst_met_autos.length; index++) {
    document.getElementById('array4').innerHTML += lijst_met_autos[index]+'<br/>';
}

document.getElementById('array5').innerHTML = eerste_item;