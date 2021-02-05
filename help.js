let box_score = 45; // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9
let dice_roll = null;

// Declare other useful DOM elements.


window.onload = function() {
  // Handle submit button appropriately.
  // Add appropriate event listeners.
  document.getElementById("button_submit").disabled = true;

  /* PLEASE HELP WITH THIS CODE BELOW 
     IM TRYING TO MAKE IT SO WHEN YOU CLICK ON THE TABLE VALUE '1' 
     IT WILL CHECK AND UNCHECK THE TEXTBOX ;.;
     So like, clicking on the 1, 2, 3 number in the box selection section
     will check the corresponding boxes
     The rest of my code works except for the change_checkbox(i) function
     which corresponds with the section below only ;.;
  */
  for (i = 0; i < 9; i++) {
    document.getElementsByTagName('td')[i].addEventListener('click', change_checkbox(i));
  }
  // THE CODE ABOVE IS NOT FUNCTIONING CORRECTLY

}

function change_checkbox(i) {
  if (document.getElementsByTagName('input')[i + 1].checked === true) {
    document.getElementsByTagName('input')[i + 1].checked = false;
  } 
  else {
    document.getElementsByTagName('input')[i + 1].checked = true;
  }

}


function generate_roll() {
  if (box_score > 6) {
    roll_dice();
  } else {
    roll_die();
  }
}

function roll_dice() {
  // Roll dice, inject text, disable / enable buttons.
  let roll1 = 1 + Math.floor(6 * Math.random()); // dice roll simulation
  let roll2 = 1 + Math.floor(6 * Math.random()); // dice roll simulation
  let sumRolls = roll1 + roll2;
  let diceOutput = '';

  diceOutput = roll1 + ' + ' + roll2 + ' = ' + sumRolls;

  document.getElementById("result_span").innerHTML = diceOutput;
  document.getElementById("button_roll").disabled = true;
  document.getElementById("button_submit").disabled = false;

  dice_roll = sumRolls;

  return sumRolls;
}

function sum_checked_values() {
  sum = 0;
  for (i = 1; i < 10; i++) {
    const checkbox = document.getElementsByTagName('input')[i];

    if (checkbox.checked) {
      sum += i;
    }
  }

  return sum;
}

function check_submission() {
  // Deal with invalid submission.

  // Deal with valid submission...
  // Delete text, disable / enable buttons and checkboxes.
  // Change to rolling one die if appropriate.
  sum_checked_values();

  if (sum_checked_values() === dice_roll) {
    for (i = 1; i < 10; i++) {
      const checkbox = document.getElementsByTagName('input')[i];

      if (checkbox.checked) {
        checkbox.checked = false;
        checkbox.disabled = true;
        document.getElementsByTagName('td')[i-1].removeEventListener('click', change_checkbox(i));
      }
    }
    box_score -= dice_roll;

    document.getElementById("button_roll").disabled = false;
    document.getElementById("button_submit").disabled = true;
    document.getElementById("result_span").innerHTML = "";
    

  } else {
    alert("The total of the boxes you selected does not match the dice roll. Please make another selection and try again");
  }

}

function roll_die() {
  // Roll single die, inject text, disable / enable buttons.

  // Roll dice, inject text, disable / enable buttons.
  let roll = 1 + Math.floor(6 * Math.random()); // dice roll simulation
  let diceOutput = '';

  diceOutput = roll;

  document.getElementById("result_span").innerHTML = diceOutput;
  document.getElementById("button_roll").disabled = true;
  document.getElementById("button_submit").disabled = false;

  return roll;

}

function finish() {
  alert(`Your score is ${box_score}.`)
  return box_score;
}
