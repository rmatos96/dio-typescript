// Como podemos melhorar o esse código usando TS? 

enum Work {
    Relojoeiro,
    Carroceiro,
    AmigodoNeymar
}

type Human = {
    name: string
    age: number
    profession: Work
}

let person: Human = {
    name: 'Josnei',
    age: 32,
    profession: Work.Carroceiro
}

let person2: Human = {
   name:'Josneilson',
   age:35,
   profession:Work.Relojoeiro
}
let person3:Human = {
    name: "laura",
    age: 32,
    profession: Work.Carroceiro
};

let person4: Human = {
    name: "carlos",
    age: 19,
    profession: Work.AmigodoNeymar
}