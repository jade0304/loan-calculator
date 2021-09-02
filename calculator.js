window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
const personalValues = {amount: , terms: , rate: };
const amountUI = document.getElementById(loan-amount);
amountUI.value = value.amount;
const termsUI = document.getElementById(loan-years);
terms.value = value.terms;
const rateUI = document.getElementById(loan-rate);
rate.value = value.rate
update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(personalValues) {
  const r = (personalValues.rate / 100) / 12;
  const n = personalValues.terms * 12;
  const p = personalValues.amount;

  return  ((p * r) * (Math.pow((1 + r), n))) / ((Math.pow((1 + r), n)) -1).toFixed(2) 
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
const monthlyPaymentUI = document.getElementById(monthly-payment);
monthlyPaymentUI.innerText = "$" + monthly;

}
