jQuery(document).ready(function($){
	var pagina = window.location.href;
	if(pagina.indexOf("introduccion") != -1){
		$(".titulo-info-basica-musica").html("").html("Introducción");
		$(".contenido-info-basica-musica").html("").html("¡Bienvenidos! En estas salas encontrarán herramientas prácticas que les ayudarán a conocer los ritmos de la música colombiana. Escuchando, tocando e interactuando.");
	}else{
		$(".titulo-info-basica-musica").html("").html("Andina");
		$(".contenido-info-basica-musica").html("").html("<p>Es un término que se aplica a una gama muy vasta de géneros musicales originados en los Andes sudamericanos. Esta área incluye principalmente los andes del Perú y Bolivia; sierras de Ecuador, noroeste de Argentina, norte de Chile y suroeste de Colombia y Venezuela.</p>"+
			"<p>El término se usa a menudo como sinónimo del estilo musical típico del altiplano e interpretado generalmente por aymaras, quechuas y otros pueblos de dicha región, estilo caracterizado por melodías nostálgicas y evocativas interpretadas con flautas de caña y charangos. Pero en sentido estricto la expresión "+'"música andina"'+" englobaría no sólo esta música sino también los restantes estilos y formaciones instrumentales presentes a lo largo y ancho de la geografía andina.</p>");
	}
	$(".contenedor").on("click", "button", function(){
		$(this).removeClass("btn-n-mus").addClass("btn-h-mus");
		$(".contenedor button").not(this).removeClass().addClass("btn btn-block btn-n-mus");
		switch($(this).attr('id')){
			case "btn-introduccion":
			$(".titulo-info-basica-musica").html("").html("Introducción");
			$(".contenido-info-basica-musica").html("").html("¡Bienvenidos! En estas salas encontrarán herramientas prácticas que les ayudarán a conocer los ritmos de la música colombiana. Escuchando, tocando e interactuando.");
			break;
			case "btn-objetivos":
			$(".titulo-info-basica-musica").html("").html("Objetivos");
			$(".contenido-info-basica-musica").html("").html("<ol>"+
				"<li>Podrás aprender conceptos generales de gramática musical.</li>"+
				"<li>Conocerás música de las regiones de Colombia: sus características, instrumentos musicales típicos y algunos ritmos de cada región.</li>"+
				"</ol>"+
				"<p>Bienvenidos a esta guía interactiva para la interpretación instrumental/vocal de ritmos de música colombiana.</p>");
			break;
			case "btn-metodologia":
			$(".titulo-info-basica-musica").html("").html("Metodología");
			$(".contenido-info-basica-musica").html("").html("<p>En estos salones interactivos, se abordará la música en dos aspectos:</p>"+
				"<ul>"+
				"<li>Teórico</li>"+
				"<li>Práctico</li>"+
				"</ul>"+
				"<p>En el aspecto teórico, tendrás a tu disposición definiciones, guías y métodos, capaces de brindarte recursos técnicos y expresivos para tu desarrollo artístico.</p>"+
				"<p>En lo práctico, podrás afianzar y consolidar los conocimientos que adquieras en la teoría. El curso, desarrollará algunas estrategias, tales como LAS SALAS INTERACTIVAS, para enriquecer y fortalecer, tanto tu proceso de formación artística, y tus aptitudes y destrezas musicales; de manera integral.</p>");
			break;
			case "btn-publico":
			$(".titulo-info-basica-musica").html("").html("Nuestro público");
			$(".contenido-info-basica-musica").html("").html("<p>Los contenidos del aula virtual están dirigidos a:</p>"+
				"<ul>"+
				"<li>Beneficiarios que asisten a los diferentes talleres del programa de música del IDARTES, bien sea de la línea Emprende CREA o Arte en la Escuela.</li>"+
				"<li>Artistas Formadores que deseen acceder al contenido del aula virtual como herramienta para complementar sus prácticas pedagógicas en el aula.</li>"+
				"<li>Jóvenes y/o adultos en proceso de formación musical (profesional o empírica) que desean profundizar en los conceptos y prácticas de algunos ritmos de la música colombiana.</li>"+
				"<li>Público en general que desee indagar y/o ampliar sus conocimientos musicales a través de los contenidos que se presentan en el aula virtual.</li>"+
				"</ul>");
			break;
			case "btn-creditos":
			$(".titulo-info-basica-musica").html("").html("Créditos");
			$(".contenido-info-basica-musica").html("").html();
			break;
			case "btn-andina":
			$(".titulo-info-basica-musica").html("").html("Andina");
			$(".contenido-info-basica-musica").html("").html("<p>Es un término que se aplica a una gama muy vasta de géneros musicales originados en los Andes sudamericanos. Esta área incluye principalmente los andes del Perú y Bolivia; sierras de Ecuador, noroeste de Argentina, norte de Chile y suroeste de Colombia y Venezuela.</p>"+
				"<p>El término se usa a menudo como sinónimo del estilo musical típico del altiplano e interpretado generalmente por aymaras, quechuas y otros pueblos de dicha región, estilo caracterizado por melodías nostálgicas y evocativas interpretadas con flautas de caña y charangos. Pero en sentido estricto la expresión "+'"música andina"'+" englobaría no sólo esta música sino también los restantes estilos y formaciones instrumentales presentes a lo largo y ancho de la geografía andina.</p>");
			break;
			case "btn-llanera":
			$(".titulo-info-basica-musica").html("").html("Llanera");
			$(".contenido-info-basica-musica").html("");
			break;
			case "btn-pacifico":
			$(".titulo-info-basica-musica").html("").html("Pacifico");
			$(".contenido-info-basica-musica").html("");
			break;
			case "btn-atlantico":
			$(".titulo-info-basica-musica").html("").html("Atlántico");
			$(".contenido-info-basica-musica").html("");
			break;
			case "btn-carranga":
			$(".titulo-info-basica-musica").html("").html("Carranga");
			$(".contenido-info-basica-musica").html("");
			break;
			case "btn-regresar":
			if($(this).attr("data-atras") == "index"){
				window.location.href=$("#blog-info").val();
			}
			if($(this).attr("data-atras") == "introduccion"){
				window.location.href=$("#blog-info").val()+"/introduccion-aula-musica";
			}
			break;
			case "btn-iniciar":
			window.location.href=$("#blog-info").val()+"/musica";
			break;
		}
	});
});