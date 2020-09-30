document.getElementById('btn_white').addEventListener('click',function(){
    document.body.style.backgroundColor = "#f6f6f6";
    console.log('Active dark mode');
});

document.getElementById('btn_dark').addEventListener('click',function(){
    document.body.style.backgroundColor = "#212f3d";
    console.log('Active white mode')
});


console.log('Welcome to my resume, what are you looking for?');

class Yamil{

    constructor(name,age,city){
        this.name = name;
        this.age = 2020-age;
        this.city = city;
    }

    getBiography(){
        let biography = `My name is ${this.name} and i'm ${this.age} years old. I live in ${this.city}`;
        return biography;
    }

}

console.log(new Yamil('Yamil', 1994, 'Rosario').getBiography());