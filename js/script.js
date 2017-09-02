function display(num) {
	document.calculator.answer.value += num;
}

function operations() {
	calculator.answer.value = eval(calculator.answer.value);
}