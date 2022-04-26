const calculator = {
	read() {
		this.firstNum = +prompt('Input first num:');
		this.secondNum = +prompt('Input second num:');
	},
	sum() {
		return this.firstNum + this.secondNum;
	},
	mul() {
		return this.firstNum * this.secondNum;
	}
}



calculator.read();
alert(calculator.sum());
alert(calculator.mul());