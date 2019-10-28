function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = '*') {
    return function(word = "special"){
        return `You are ${flair}${word}${flair}!`
    }
}

const Calculator = {
    add: function(num1, num2){return num1 + num2},
    subtract: function(num2,  num1){return num2 - num1},
    multiply: function(num1, num2){return num1 * num2},
    divide: function(num1, num2){return num1 / num2}
}

function actionApplyer(int, arrOfFunctions) {
  if (arrOfFunctions.length === 0) {
      return int
  } else {
      let current = int
      arrOfFunctions.forEach(f => {
          current = f(current)
      })
      return current
  }
}