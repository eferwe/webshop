(function() {
	
 	angular
		.module("webshop",
			["ngRoute", "webshop.cart", "webshop.product"])
		
		.run(function($rootScope){
			$rootScope.cartProducts= {} ;
			});



	
	
		// .config(function($rootProvider) {
		// 	$rootScopeProvider
		// 	.when("/",  {
		// 		templateUrl: "index.html",
		// 		controller: "productController"
		// 	})
		// 	.otherwise({ redirectTo: '/' })

		// 	});
		

		





})();