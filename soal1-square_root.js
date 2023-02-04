const prompt = require('prompt-sync')({sigint: true});

const input_data = prompt('Input bilangan: ');

const data_x = Math.sqrt(input_data);

if (input_data < 0){
    console.log('Tidak bisa input bilangan negatif');
}
else if (input_data % 2 !== 0 ){
    console.log('Tidak bisa input bilangan ganjil');
}
else {
    console.log('Angka yang anda input "'+input_data+'" akar pangkat dari data yang anda input adalah '+data_x);
    console.log('pembulatan angka dari "'+data_x+'" adalah '+Math.round(data_x));
}