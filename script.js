function Calculator(){

	// this allows access using dot notation. c.calculation, c.nums, etc
	this.order=[];
	this.lastInputType="";

	this.appendNum = function(num){
		var l=this.lastInputType;
		if(l==="" || l==="op"){
			this.order.push(num);
		} else if(l==="num"){
			this.order[this.order.length-1]+=num;
		} 
		this.lastInputType="num";
	};

	this.appendOp = function(op){
		var l=this.lastInputType;
		if(l==="num"){
			this.order.push(op);
		} else if (this.lastInputType==="op"){
			this.order[this.order.length-1]=op;
		} else if(this.lastInputType===""){

		}
		this.lastInputType="op";
	}

	this.equals = function(){
		if(this.lastInputType==="num"){
			if(this.order.length===0){
				return 0;
			}
			return eval(this.order.join(''));
		} else {
			this.order.pop();
			return eval(this.order.join(''));
		}
	}

	this.clearAll = function(){
		this.order=[];
	}

	this.clear = function(){
		if(this.lastInputType==="num"){
			this.lastInputType="op";
		} else {
			this.lastInputType="num";
		}
		this.order.pop();
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
// c.clearAll();

c.clear();
// c.clear();
// c.clear();
// c.clear();
// c.clear();

// c.equals();
// console.log(c.lastInputType);
// console.log(c.order);
// console.log(c.equals());
console.log(eval("2^2"));

