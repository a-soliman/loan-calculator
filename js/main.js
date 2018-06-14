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

// CALCULATE LOAN
function claculate(e) {
    e.preventDefault();

    const values = getValues();
    
    if (!validateValues(values)) {
        return raiseError("Check your numbers!");
    }
    
    // COMPUTE MONTHLY PAYMENTS
    const principal             = values.amount;
    const calculatedInterest    = values.interest / 100 / 12;
    const calculatedPayments    = values.years * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    monthlyPayment.value    = monthly.toFixed(2);
    totalPayment.value      = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value     = ((monthly * calculatedPayments) - principal).toFixed(2);
    return;
}

// GET THE SUBMITED VALUES
function getValues() {
    const amountValue   = parseFloat(loanAmount.value);
    const interestValue = parseFloat(interest.value);
    const yearsValue    = parseFloat(years.value);

    return {
        amount: amountValue,
        interest: interestValue,
        years: yearsValue
    };
}
