function Calculator(){

	// this allows access using dot notation. c.calculation, c.nums, etc
	this.calculation=""; 
	this.currNum="";
	this.currOp="";
	this.order=[];

	// defines private vars
	var private="no dot notation";

	this.appendNum = function(num){
		this.currNum+=num;
		this.currOp="";
		return this.calculation+=num;
	};

	this.appendOp = function(op){
		if(this.currOp===""){
			this.calculation+=op;
		} else {
			this.calculation=this.calculation.slice(0,-1)+op;
		}
		this.currNum="";
		this.currOp=op;
		return this.calculation;
	}

	this.equals = function(){
		return eval(this.calculation);
	}

	this.clearAll = function(){
		this.currNum="";
		this.currOp="";
		this.calculation="";
	}

	// clear last number or operation
	this.clear = function(){
		if(this.currNum===""){
			this.calculation=this.calculation.slice(0,-1);
			if (this.calculation!=""){this.currOp=""}
		} else if (this.currOp===""){
			this.calculation=this.calculation.slice(0,-1);
		}
		this.currNum="";
		this.currOp="";
	}

}

var c = new Calculator();
c.appendNum("1")
c.appendNum("0");
c.appendOp("+");
c.appendOp("-");
c.appendNum("2");
c.appendOp("-");
c.appendOp("+");
c.appendNum("1");

// console.log(c.equals());

