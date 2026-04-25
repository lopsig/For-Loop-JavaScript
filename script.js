const numbersList = () => {
  console.log("Ejercicio 1")
  for (let i = 0; i < 3; i++){
    console.log(i)
  }
  console.log("----------------------------")
}

const numbersListReverse = () => {
  console.log("Ejercicio 2");
  for (let i = 3; i > 0; i--){
    console.log(i);
  }
  console.log("----------------------------");
}

const numbersListPair = () => {
  console.log("Ejercicio 3");
  for (let i = 0; i <= 10; i += 2){
    console.log(i);
  }
  console.log("----------------------------");
}

const numbersListOdd = () => {
  console.log("Ejercicio 4");
  for (let i = 1; i <= 7; i += 2){
    console.log(i);
  }
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