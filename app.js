var img = document.getElementById('Img');


var Dany = {
    name:['Daenerys Stormborn of the House Targaryen', 'the Unburnt', 'Queen of the Andals and the First Men', 'Khaleesi of the Great Grass Sea', 'Breaker of Chains',  'Mother of Dragons'],
    age: 21,
    city: 'valirya',
    hobby: 'Drakarys',
    died: 'stabed',
    language: 'Valyria',
}

img.onclick = function() {
    console.log(Dany);
    // img clicked
    alert(`${Dany.name}and she was${Dany.age} years old`)
};
//document.write(evil);