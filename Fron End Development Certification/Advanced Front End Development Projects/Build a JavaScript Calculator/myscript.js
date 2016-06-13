var num = 0;
var num_otr = null;
var ans = 0;
var operation = '';

$(document).ready(function () {
    $("#text").text(num);
});

$("#ac").click(function () {
    num = 0;
    operation = '';
    num_otr = null;
    updateScreen(num);
});

$("#ce").click(function () {
    num = 0;
    updateScreen(num);
});

$("#num_0").click(function () {
    if (num == 0 && num.toString().indexOf('.') == -1)
        num = 0;
    else
        num += '0';
    updateScreen(num);
});

$("#num_1").click(function () {
    if (num == 0 && num.toString().indexOf('.') == -1)
        num = '1';
    else
        num += '1';
    updateScreen(num);
});

$("#num_2").click(function () {
    if (num == 0 && num.toString().indexOf('.') == -1)
        num = '2';
    else
        num += '2';
    updateScreen(num);
});

$("#num_3").click(function () {
    if (num == 0 && num.toString().indexOf('.') == -1)
        num = '3';
    else
        num += '3';
    updateScreen(num);
});

$("#num_4").click(function () {
    if (num == 0 && num.toString().indexOf('.') == -1)
        num = '4';
    else
        num += '4';
    updateScreen(num);
});

$("#num_5").click(function () {
    if (num == 0 && num.toString().indexOf('.') == -1)
        num = '5';
    else
        num += '5';
    updateScreen(num);
});

$("#num_6").click(function () {
    if (num == 0 && num.toString().indexOf('.') == -1)
        num = '6';
    else
        num += '6';
    updateScreen(num);
});

$("#num_7").click(function () {
    if (num == 0 && num.toString().indexOf('.') == -1)
        num = '7';
    else
        num += '7';
    updateScreen(num);
});

$("#num_8").click(function () {
    if (num == 0 && num.toString().indexOf('.') == -1)
        num = '8';
    else
        num += '8';
    updateScreen(num);
});

$("#num_9").click(function () {
    if (num == 0 && num.toString().indexOf('.') == -1)
        num = '9';
    else
        num += '9';
    updateScreen(num);
});

$("#dot").click(function () {
    if (num.toString().indexOf('.') == -1)
        num += '.';
    updateScreen(num);
});

$("#ans").click(function () {
    num = ans;
    updateScreen(num);
});

$("#add").click(function () {
    if (operation !== '')
        num_otr = calculate(operation, num_otr, num);
    else
        num_otr = num;
    num = 0;
    operation = '+';
    updateScreen(num_otr);
});

$("#sub").click(function () {
    if (operation !== '')
        num_otr = calculate(operation, num_otr, num);
    else
        num_otr = num;
    num = 0;
    operation = '-';
    updateScreen(num_otr);
});

$("#mult").click(function () {
    if (operation !== '')
        num_otr = calculate(operation, num_otr, num);
    else
        num_otr = num;
    num = 0;
    operation = '*';
    updateScreen(num_otr);
});

$("#div").click(function () {
    if (operation !== '')
        num_otr = calculate(operation, num_otr, num);
    else
        num_otr = num;
    num = 0;
    operation = '/';
    updateScreen(num_otr);
});

$("#mod").click(function () {
    if (operation !== '')
        num_otr = calculate(operation, num_otr, num);
    else
        num_otr = num;
    num = 0;
    operation = '^';
    updateScreen(num_otr);
});


$("#equal").click(function () {
    if (num_otr != null) {
        num_otr = calculate(operation, num_otr, num);
        updateScreen(num_otr);
        operation = '';
        num = 0;
        ans = num_otr;
    }
});

function calculate(op, num1, num2) {
    switch (op) {
    case '+':
        return parseFloat(num1) + parseFloat(num2);
    case '-':
        return parseFloat(num1) - parseFloat(num2);
    case '*':
        return parseFloat(num1) * parseFloat(num2);
    case '/':
        return parseFloat(num1) / parseFloat(num2);
    case '^':
        return Math.pow(parseFloat(num1), parseFloat(num2));
    }
}

function updateScreen(value) {
    $("#text").text(value);
}