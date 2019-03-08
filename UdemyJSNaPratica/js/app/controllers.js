document.addEventListener('DOMContentLoaded', function() {
	let elems = document.querySelectorAll('.modal');
	let options = "";
	let instances = M.Modal.init(elems, options);
});

angular.module("meuModulo")
.controller("indexController", function($scope){

	$scope.titulo = "Home";
	$scope.alunos = [
		{nome: "Camila", email: "Camila@email.com", nota1: 65, nota2: 85, nota3: 55},
		{nome: "Pedro", email: "Pedro@email.com", nota1: 75, nota2: 60, nota3: 55},
		{nome: "Murilo", email: "Murilo@email.com", nota1: 85, nota2: 85, nota3: 55},
		{nome: "João", email: "João@email.com", nota1: 55, nota2: 60, nota3: 55},
		{nome: "Ana", email: "Ana@email.com", nota1: 75, nota2: 80, nota3: 55},
	];

	var init = function(){
		$scope.alunos.forEach(function(aluno){
			aluno.media = media(aluno);
		});
		limpaForm();
	};

	var contar = 0;
	var media = function(Aluno){
		console.log(contar++);
		var media = (parseFloat(Aluno.nota1) + parseFloat(Aluno.nota2) + parseFloat(Aluno.nota3))/3;
		return media.toFixed(2);
	};

	$scope.abreAddAluno = function(){
		$scope.editando = false;
		M.Modal.getInstance(document.getElementById('modal1')).open();
		limpaForm();
	};

	$scope.addAluno = function(Aluno){			
		Aluno.media = media(Aluno);
		$scope.alunos.push(Aluno);			
		M.Modal.getInstance(document.getElementById('modal1')).close();
	};

	var alunoEditar;
	$scope.editando = false;
	$scope.editarAluno = function(Aluno){
		angular.copy(Aluno, $scope.Aluno);
		alunoEditar = Aluno;
		$scope.editando = true;
		M.Modal.getInstance(document.getElementById('modal1')).open();
	};

	$scope.deletarAluno = function(Aluno){
		for(var index in $scope.alunos){
			var aux = $scope.alunos[index];
			if(aux === Aluno){
				$scope.alunos.splice(index, 1);
			}
		}
	};

	var limpaForm = function(){
		$scope.Aluno = {nome: '', email: '', nota1: '', nota2: '', nota3: '', media: ''};
	};

	$scope.SalvarAluno = function(Aluno){
		alunoEditar.nome = Aluno.nome;
		alunoEditar.email = Aluno.email;
		alunoEditar.nota1 = Aluno.nota1;
		alunoEditar.nota2 = Aluno.nota2;
		alunoEditar.nota3 = Aluno.nota3;
		alunoEditar.media = media(Aluno);
		M.Modal.getInstance(document.getElementById('modal1')).close();
	};

	init();
});

angular.module("meuModulo")
.controller('ContatosController', function($scope){
	console.log('ContatosController');
	$scope.titulo = "Contatos";
});