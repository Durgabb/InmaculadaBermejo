$(document).ready(function(){
	function mostrarMenu(){
		$(".cabecera__menu").slideToggle(200)
	};

	$(".cabecera__boton").on("click", mostrarMenu);
})