title = "dr";
name = "Mateusz";
surname = "Kubicki";
street = "Długa 15";
city = "Kraków";
zip = "30-781";
country = "Poland";

/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/

let dane1 =
  title +
  " " +
  name +
  " " +
  surname +
  "\n" +
  "ul. " +
  street +
  "\n" +
  zip +
  " " +
  city +
  "\n" +
  country.toUpperCase();

console.log(dane1);

//-----------------------------------------------------------

let dane2 = `${title} ${name} ${surname}
ul. ${street}
${zip} ${city}
${country.toUpperCase()}`;

console.log(dane2);
