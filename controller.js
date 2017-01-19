var app = angular.module("myApp", [])

.service('MathService', function(){
    
    this.add = function(a,b){ return a + b };
    
    this.subtract = function(a,b){ return a - b };
    
    this.multiply = function(a,b){ return a * b };
    
    this.divide = function(a,b){ return a / b };
    
})

.service('CalculatorService',function(MathService){
   
    this.square = function(a){ return MathService.multiply(a,a)};
    
    this.cube = function(a){return MathService.multiply(a,MathService.multiply(a,a))};
    
    this.add = function(a,b){return MathService.add(a,b)};
    
    this.subtract = function(a,b){return MathService.subtract(a,b)};
    
    this.multiply = function(a,b){return MathService.multiply(a,b)};
    
    this.divide = function(a,b){return MathService.divide(a,b)};
    
})

.controller('myController',['$scope','CalculatorService',function($scope,CalculatorService){
   
    $scope.doSquare = function(){
        $scope.answer = CalculatorService.square($scope.number);
    } 
    
    $scope.doCube = function(){
        $scope.answer = CalculatorService.cube($scope.number);
    }
    
    $scope.doAdd = function(){
        $scope.answer = CalculatorService.add($scope.number,$scope.number1);
    }
    
    $scope.doSubtract = function(){
        $scope.answer = CalculatorService.subtract($scope.number, $scope.number1);
    }
    
    $scope.doMultiply = function(){
        $scope.answer = CalculatorService.multiply($scope.number, $scope.number1);
    }
    
    $scope.doDivide = function(){
        $scope.answer = CalculatorService.divide($scope.number, $scope.number1);
    }
}]);
