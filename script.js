function displayCalc(disp){
	$(".display").val(disp);
}

$(document).ready(function(){
	var calc=new Calculator();

	$(".btn-num").click(function(){
		calc.appendNum($(this).val())
		displayCalc(calc.order.join(''));
	});

	$(".btn-op").click(function(){
		calc.appendOp($(this).val())
		displayCalc(calc.order.join(''));
	});

	$(".btn-clear").click(function(){
		calc.clear();
		console.log(calc.order);
		displayCalc(calc.order.join(''));
	});

	$(".btn-clear-all").click(function(){
		calc.clearAll();
		console.log(calc.order);
		displayCalc("");
	});

	$(".btn-back").click(function(){
		calc.back();
		displayCalc(calc.order.join(''));
	});

	$(".btn-eq").click(function(){
		var equals=calc.equals();
		displayCalc(calc.order.join(''));
		console.log(equals);
		console.log(calc.order);
	});

});