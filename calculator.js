function Calculator(){

	this.order=[];
	this.lastInputType="";

	this.appendNum = function(num){
		var l=this.lastInputType;
		if(l==="" || l==="op"){
			this.order.push(num);
		} else if(l==="num"){
			if(this.order.length>1){
				this.order[this.order.length-1]+=num;
			} else {
				this.order.push(num);
			}
		} else if (l==="eq"){
			this.order=[];
			this.order.push(num);
		}
		this.lastInputType="num";
	};

	this.appendOp = function(op){
		var l=this.lastInputType;
		if(l==="num" | l==="eq"){
			this.order.push(op);
		} else if (l==="op"){
			this.order[this.order.length-1]=op;
		} else if(l===""){
			this.order.push("0",op);
		}
		this.lastInputType="op";
	};

	this.equals = function(){
		var r=0;
		if(this.lastInputType==="num"){
			if(this.order.length===0){
				r=0;
			}
			r=eqEval(this.order);
		} else {
			this.order.pop();
			r=eqEval(this.order);
		}
		this.order=[];
		this.order.push(r);
		this.lastInputType="eq";
		return r;
	};

	this.back = function(){
		var ord=this.order;
		var l=this.lastInputType;
		if(ord.length>0){
			if(this.order[ord.length-1].length>1){
				this.order[ord.length-1]=this.order[ord.length-1].slice(0,-1);
			} else {
				this.clear();
			}

		}
	}

	this.clearAll = function(){
		this.order=[];
	};

	this.clear = function(){
		if(this.lastInputType==="num"){
			this.lastInputType="op";
		} else {
			this.lastInputType="num";
		}
		console.log(this.order);
		this.order.pop();
		console.log(this.order);
	};

	function eqEval(arr){
		if(arr.len===1){
			if(this.lastInputType==="num"){
				return arr[0];
			} else {
				return 0;
			}
			
		} else if(arr.len===0){
			return 0;
		} else {
			return eval(arr.join(''));
		}
	};

}

// var c = new Calculator();
// c.appendNum("5");
// c.appendOp("+");
// c.appendNum("5");
// c.appendNum("2");
// c.appendNum("6");
// c.back();
// c.back();
// c.back();
// c.back();
// c.back();
// c.back();
// console.log(c.order);
// console.log(c.equals());
// console.log(c.lastInputType);
// c.clear();
// console.log(c.lastInputType);
// // console.log(eval("4÷2"));