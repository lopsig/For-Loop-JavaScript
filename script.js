const numbersList = () => {
  let result = []
  console.log("Ejercicio 1")
  for (let i = 0; i < 3; i++){
    console.log(i)
    result.push(i)
  }
  printOutput("output1", result)
  console.log("----------------------------")
}

const numbersListReverse = () => {
  let result = [];
  console.log("Ejercicio 2");
  for (let i = 3; i > 0; i--){
    console.log(i);
    result.push(i);
  }
  printOutput("output2", result);
  console.log("----------------------------");
}

const numbersListPair = () => {
  let result = [];
  console.log("Ejercicio 3");
  for (let i = 0; i <= 10; i += 2){
    console.log(i);
    result.push(i);
  }
  printOutput("output3", result);
  console.log("----------------------------");
}

const numbersListOdd = () => {
  let result = [];
  console.log("Ejercicio 4");
  for (let i = 1; i <= 7; i += 2){
    console.log(i);
    result.push(i);
  }
  printOutput("output4", result);
  console.log("----------------------------");
}

function execute(numExcercise) {
  if (numExcercise == 1) {
    numbersList()
  } else if (numExcercise == 2) {
    numbersListReverse()
  } else if (numExcercise == 3) {
    numbersListPair()
  } else if (numExcercise == 4) {
    numbersListOdd()
  }
}


//FUNCION PARA MOSTRAR EN PANTALLA
const printOutput = (outputId, numbers) => {
  const output = document.getElementById(outputId)
  output.innerHTML = ""

  numbers.forEach((num, index) => {
    const line = document.createElement("span");
    line.className = "output-line"
    line.textContent = num
    output.appendChild(line)
  })
}