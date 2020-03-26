//Dane:
//p - połowa obwodu trójkąta
//poleT - pole trójkąta
// boki trójkąta
//a = 3;
b = 4;
c = 5;
h = 7;

//Rozwiązanie:
p = (1 / 2) * (b + c + h);
poleT = Math.sqrt(p * (p - b) * (p - c) * (p - h));

//Odpowiedź

let a = () =>
  `Pole Trójąta o bokach ${b}, ${c} oraz ${h} wynosi ${poleT} [j^2].`;

console.log(a());
