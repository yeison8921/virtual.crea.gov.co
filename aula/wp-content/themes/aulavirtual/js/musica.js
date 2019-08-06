jQuery(document).ready(function($){
	$("#div-cim").on("click", "button", function(){
		switch($(this).attr('id')){
			case "btn-introduccion":
			$("#titulo-info-basica-musica").html("").html("Introducción");
			$("#contenido-info-basica-musica").html("").html("¡Bienvenidos! En estas salas encontrarán herramientas prácticas que les ayudarán a conocer los ritmos de la música colombiana. Escuchando, tocando e interactuando.");
			break;
			case "btn-objetivos":
			$("#titulo-info-basica-musica").html("").html("Objetivos");
			$("#contenido-info-basica-musica").html("").html("<ol>"+
				"<li>Podrás aprender conceptos generales de gramática musical.</li>"+
				"<li>Conocerás música de las regiones de Colombia: sus características, instrumentos musicales típicos y algunos ritmos de cada región.</li>"+
				"</ol>"+
				"<p>Bienvenidos a esta guía interactiva para la interpretación instrumental/vocal de ritmos de música colombiana.</p>");
			break;
			case "btn-metodologia":
			$("#titulo-info-basica-musica").html("").html("Metodología");
			$("#contenido-info-basica-musica").html("").html("<p>En estos salones interactivos, se abordará la música en dos aspectos:</p>"+
				"<ul>"+
				"<li>Teórico</li>"+
				"<li>Práctico</li>"+
				"</ul>"+
				"<p>En el aspecto teórico, tendrás a tu disposición definiciones, guías y métodos, capaces de brindarte recursos técnicos y expresivos para tu desarrollo artístico.</p>"+
				"<p>En lo práctico, podrás afianzar y consolidar los conocimientos que adquieras en la teoría. El curso, desarrollará algunas estrategias, tales como LAS SALAS INTERACTIVAS, para enriquecer y fortalecer, tanto tu proceso de formación artística, y tus aptitudes y destrezas musicales; de manera integral.</p>");
			break;
			case "btn-publico":
			$("#titulo-info-basica-musica").html("").html("Nuestro público");
			$("#contenido-info-basica-musica").html("").html("<p>Los contenidos del aula virtual están dirigidos a:</p>"+
				"<ul>"+
				"<li>Beneficiarios que asisten a los diferentes talleres del programa de música del IDARTES, bien sea de la línea Emprende CREA o Arte en la Escuela.</li>"+
				"<li>Artistas Formadores que deseen acceder al contenido del aula virtual como herramienta para complementar sus prácticas pedagógicas en el aula.</li>"+
				"<li>Jóvenes y/o adultos en proceso de formación musical (profesional o empírica) que desean profundizar en los conceptos y prácticas de algunos ritmos de la música colombiana.</li>"+
				"<li>Público en general que desee indagar y/o ampliar sus conocimientos musicales a través de los contenidos que se presentan en el aula virtual.</li>"+
				"</ul>");
			break;
			case "btn-creditos":
			$("#titulo-info-basica-musica").html("").html("Créditos");
			$("#contenido-info-basica-musica").html("").html();
			break;
		}
	});
});