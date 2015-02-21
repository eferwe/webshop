(function(){
	"use strict";

	var cartService  =  function($http, $rootScope){

		var SetCart  = function(product, quantity, total ){
			
			if($rootScope.cartProducts[product.name])
			{
				
			     	 $rootScope.cartProducts[product.name].quantity += quantity; 
			     	 $rootScope.cartProducts[product.name].total += total;
			     	

				
					
				
			}
			else{
				$rootScope.cartProducts[product.name]= {
							product: product,
							quantity: quantity,
							total: total
							
	
					}
			}

		}
			return{

				SetCart: SetCart
			}

	}
		angular
			.module("webshop")
			.factory("cartService", cartService);

}());