'use strict';

/**
 * @ngdoc function
 * @name calcApp.controller:CalculatorCtrl
 * @description
 * # CalculatorCtrl
 * Controller of the calcApp
 */
angular.module('calcApp')
  .controller('CalculatorCtrl', function ($scope) {
	  $scope.expression='0';
	  var operator={
	  	plus :'+',
	  	minus :'-',
	  	multiply:'*',
	  	divide :'/',
	  	
	  }
	  var contains=function(value){
	  		if(value==operator.plus) return true;
	  		else if(value==operator.minus) return true;
	  		else if (value==operator.multiply) return true;
	  		else if (value==operator.divide) return true;
	  		else return false
	  	}
$scope.operation="";
			$scope.numberClicked = function(clickedNumber) {
				if($scope.expression=='0'){
					$scope.expression=clickedNumber;
				}
				else {
					$scope.expression+=clickedNumber
				}

				}
				
				
			$scope.operationClicked = function(clickedOperation) {
				$scope.operation=clickedOperation;
				var opp=$scope.expression.substring($scope.expression.length-1,$scope.length);
				if(!contains(opp)&& $scope.expression != '0'){
				if(isExpression($scope.expression)){
					$scope.calculate($scope.expression);

					$scope.expression+=clickedOperation;
				}
				else{
					$scope.expression+=clickedOperation;
				
			}
			}
			}
			$scope.calculate = function(expression) {

				var opp=findopp(expression);
				if(opp){
				var num1=expression.split(opp)[0];
				var num2=expression.split(opp)[1];
				$scope.expression=domath(opp,parseInt(num1),parseInt(num2)).toString();

				// if(!contains(expression.substring(expression.length-1,expression.length))){
				// 	split(expression);
				// }else{
				// 	console.log("invalid");
				// }
			}
			};
			
			$scope.resetClicked = function() {
				$scope.expression='0';
				$scope.operation="";
			};
			var findopp=function(expression){
				if(expression.includes(operator.plus)){
					return operator.plus;
				}else if(expression.includes(operator.minus)){
					return operator.minus;
				}else if(expression.includes(operator.multiply)){
					return operator.multiply;
				}else if(expression.includes(operator.divide)){
					return operator.divide;
				}
					else return false;

			}
			var isExpression=function(expression){
				if(containsopp(expression)){
					return true;
				}
				else return false;
			};
			var containsopp=function(expression){
				
				if(expression.includes(operator.plus)||expression.includes(operator.minus)||expression.includes(operator.multiply)||expression.includes(operator.divide)){
				return true;
				}
				else return false;
			};
    		var split=function(expression){
    			var count = (expression.match(/'+'/g) || []).length;
    			console.log(count);
    		}
   			var domath=function(opp,num1,num2){
   				switch (opp) {
   					case operator.plus:
   					{
   						return num1+num2;
   						break;
   					}
   					case operator.minus:
   					{
   						return num1-num2;
   						break;
   					}
   					case operator.multiply:
   					{
   						return num1*num2;
   						break;
   					}
   					case operator.divide:
   					{	
   						if(num2==0) return 'undefined';
   						else return num1/num2;
   						break;
   					}
   				}
   			}

  // calculatorModel = {
		// 	result: 0, // Holds the actual result in memory
		// 	operation: "",
		// 	currentNumber: "0",
		// 	currentDisplay: "", // Shows the input until the result is shown
			
			
		// 	setOperation: function(operationToSet) {
		// 		this.operation = operationToSet;
		// 		if(calculatorModel.currentNumber === "0") {
		// 			this.currentDisplay += "0";
		// 		}
				
		// 		this.currentDisplay += " " + this.operation + " ";
		// 		this.calculate();
				
		// 		this.currentNumber = "";
		// 	},

		// 	calculate: function() {

		// 		switch(this.operation) {
		// 			case "+":
		// 				this.result = this.result + parseFloat(this.currentNumber);
		// 				break;
						
		// 			case "-":
		// 				this.result = this.result - parseFloat(this.currentNumber);
		// 				break;
		// 		}
		// 	}			
			
		// };
  });
