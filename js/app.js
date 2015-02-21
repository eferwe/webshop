/*
   product controller
*/


(function(){
	"use strict";

	angular
	.module("webshop.product", [])
	.controller("productController", productController );
	

	function productController($scope, productsService, cartService, $rootScope){

//		$scope.products = $http.get("data/products.json");
		$scope.categoriesSelected = new Array();
		$rootScope.totalsum = 0;
		var modelProducts = function(data){
			$scope.products = data;
		}

		var modelCategories = function(data){
			$scope.categories = data;
		}

		var getError =  function(reason){
		$scope.error =  "Some error happend";
		}

		$scope.categoryChange = function(category){

			var i = $scope.categoriesSelected.indexOf(category);  // -1 for not checked
			if(i > -1 ){

				$scope.categoriesSelected.splice(i , 1);
			}	
			else{
			$scope.categoriesSelected.push(category)
			}
		//	console.log(category);
		}


		$scope.categoryFilter = function(product){
			if($scope.categoriesSelected.length > 0){
				if($scope.categoriesSelected.indexOf(product.category) < 0){
					return;
				}
			}
			return product;
		}

		$scope.sendtoChart = function(product){
			var quantity = this.quantity;
			var total = this.quantity*product.price;
			 $rootScope.totalsum += total;
			console.log($rootScope.totalsum);
			
			
			cartService.SetCart(product, quantity, total);
					
		}

		productsService.getProducts()
				.then(modelProducts);

		productsService.getCategories()
				.then(modelCategories);			

		// $http.get("data/products.json")
		// 	.then(getProducts , getError);

		// $http.get("data/categories.json")
		// 	.then(getCategories , getError);	

	}


})();