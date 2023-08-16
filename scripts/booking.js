/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 0; 
let numberOfDaysSelected = 0;






/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function updateTotalCost() {
  let totalCost = costPerDay * numberOfDaysSelected;
  document.getElementById('calculated-cost').innerHTML = totalCost; 
}

document.querySelectorAll('.blue-hover').forEach(selector => {
  selector.addEventListener('click', () => {
    selector.classList.toggle('clicked');
    
    if (selector.classList.contains('clicked')) {
      numberOfDaysSelected++;
    } else {
      numberOfDaysSelected--;
    }

    updateTotalCost(); 
  });
});







/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clearDays() {
  numberOfDaysSelected = 0;

  document.querySelectorAll('.blue-hover').forEach(selector => {
    selector.classList.remove('clicked');
  });

  updateTotalCost();
}

document.getElementById('clear-button').addEventListener('click', clearDays);

  




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function updateTotalCost() {
  let totalCost = numberOfDaysSelected * 20;
  document.getElementById('calculated-cost').innerHTML = totalCost;
}
function handleHalfDayClick() {
  document.getElementById('half').classList.add('clicked');
  document.getElementById('full').classList.remove('clicked');
  updateTotalCost();
}
document.getElementById('half').addEventListener('click', handleHalfDayClick);




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function updateTotalCost() {
  let totalCost = numberOfDaysSelected * 35;
  document.getElementById('calculated-cost').innerHTML = totalCost;
}
function handleFullDayClick() {
  document.getElementById('full').classList.add('clicked');
  document.getElementById('half').classList.remove('clicked');
  updateTotalCost();
}
document.getElementById('full').addEventListener('click', handleFullDayClick);




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function updateTotalCost() {
  document.getElementById('calculated-cost').innerHTML = totalCost;
}


