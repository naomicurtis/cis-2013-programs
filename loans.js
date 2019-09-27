var $ = function (id) 
{
    return document.getElementById(id);
};

 var calculate = function()
 {
var floatMonthlyPayment;
var intLoanTerm;
var floatTotalCost;
floatMonthlyPayment = parseFloat($("monthly_payment").value);
intLoanTerm = parseInt($("loan_length").value);
floatTotalCost = floatMonthlyPayment * intLoanTerm;
$("total_cost").value = floatTotalCost;
 };

 window.onload = function () 
{
    $("loan_length").value = "";
    $("total_cost").value = "";
    $("calc").onclick = calculate;
    $("monthly_payment").focus();
};