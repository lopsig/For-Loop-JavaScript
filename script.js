const numbersList = () => {
  console.log("Ejercicio 1")
  for (let i = 0; i < 3; i++){
    console.log(i)
  }
  console.log("----------------------------")
}

const numberListReverse = () => {
  console.log("Ejercicio 2");
  for (let i = 3; i > 0; i--){
    console.log(i);
  }
  console.log("----------------------------");
}

const numberListPairs = () => {
  console.log("Ejercicio 3");
  for (let i = 0; i < 10; i += 2){
    console.log(i);
  }
  console.log("----------------------------");
}

function execute(numExcercise) {
  if (numExcercise == 1) {
    numbersList()
  } else if (numExcercise == 2) {
    numberListReverse()
  } else if (numExcercise == 3) {
    numberListPairs()
  }
}