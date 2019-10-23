const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE

    let place = input[0]

    console.log(1,place);

    for (let i = 1; i < input.length; i++) {
      if (input.indexOf(i) % 2 == 0) {
        place -= input[i];
        }
        else {
        place += input[i];
        }
      }
    // je me rend compte a la fin que les 2 chiffres (depassement et dépassé) sont dans le meme index et que ce sont des strings, ca ne pouvait pas marcher...
  
    console.log(2,place);

    function prix(place) {
      if (place < 100) {
        return "1000";
      }
      else if (place > 100 && place < 10000) { 
        return "1000";
      }
      else {
        return "KO";
      }
    }
    
    console.log(3,prix)



    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}

