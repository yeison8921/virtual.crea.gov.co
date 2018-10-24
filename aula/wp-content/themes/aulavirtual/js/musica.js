jQuery(document).ready(function($){
	$("#btn-salones").click(function() {
		$("#div-inicio-curso-musica").hide();
		$("#div-inicio-info-aula-musica").show();
		$("#div-info-aula-musica").show();
	});

	$("#btn-inicio-musica").click(function() {
		$("#div-sel-modulo-musica").show();
		$("#btn-inicio-musica").hide();
		$("#div-info-aula-musica").hide();
	});

	$(".dropdown-menu").on('click', 'button', function() {
		blog_info = $("#blog-info").val();
		window.location.href = blog_info+"/musica";
	});
});