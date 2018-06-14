// GLOABAL VARS
const form              = document.querySelector('#loan-form');
const loanAmount        = document.querySelector('#amount');
const interest          = document.querySelector('#interest');
const years             = document.querySelector('#years');
const monthlyPayment    = document.querySelector('#monthly-payment');
const totalPayment      = document.querySelector('#total-payment');
const totalInterest     = document.querySelector('#total-interest');

// LISTEN FOR SUBMIT
form.addEventListener('submit', claculate);

