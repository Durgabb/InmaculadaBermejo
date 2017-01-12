$(document).ready(function(){
	function mostrarMenu(){
		$(".cabecera__menu").slideToggle(200)
	};

	$(".cabecera__boton").on("click", mostrarMenu);

	function ocultarMenu(){
		$(".cabecera__menu").slideUp(200)
	}

	$(".menu__item").on("click", ocultarMenu)
})