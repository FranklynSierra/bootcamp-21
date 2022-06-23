 import suma from "./moduls/controller.js"
import axios from 'axios'
import chalk from 'chalk';


axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  console.log(chalk.green('Hello world!'));

const sum=suma(1,2)
console.log(sum)
const sum2=suma(4,5)
console.log(sum2)



