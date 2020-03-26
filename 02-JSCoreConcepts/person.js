class Person {
  constructor(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko;
  }
}

Person.prototype.fullName = function() {
  return `${this.imie} ${this.nazwisko.toUpperCase()}`;
};
Person.prototype.inicialy = function() {
  return `${this.imie[0].toUpperCase()}.${this.nazwisko[0].toUpperCase()}.`;
};

janNowak = new Person("Jan", "Nowak");
dominikGreda = new Person("Dominik", "Gręda");

console.log(`${janNowak.fullName()} ${janNowak.inicialy()}`);
console.log(`${dominikGreda.fullName()} ${dominikGreda.inicialy()}`);
