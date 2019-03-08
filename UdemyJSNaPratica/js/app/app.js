angular.module("meuModulo",['ngRoute'])

.config(function($routeProvider){
	console.log($routeProvider);
	$routeProvider
	.when("/home", {
		templateUrl:"templates/home.html",
		controller:"indexController"
	})
	.when("/contato", {
		templateUrl:"templates/contato.html",
		controller:"ContatosController"
	});

	$routeProvider.otherwise({redirectTo:"/home"});
})