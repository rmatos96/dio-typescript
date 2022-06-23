"use strict";
// Como podemos melhorar o esse código usando TS? 
var Work;
(function (Work) {
    Work[Work["Relojoeiro"] = 0] = "Relojoeiro";
    Work[Work["Carroceiro"] = 1] = "Carroceiro";
    Work[Work["AmigodoNeymar"] = 2] = "AmigodoNeymar";
})(Work || (Work = {}));
let person = {
    name: 'Josnei',
    age: 32,
    profession: Work.Carroceiro
};
let person2 = {
    name: 'Josneilson',
    age: 35,
    profession: Work.Relojoeiro
};
let person3 = {
    name: "laura",
    age: 32,
    profession: Work.Carroceiro
};
let person4 = {
    name: "carlos",
    age: 19,
    profession: Work.AmigodoNeymar
};
