jQuery(document).ready(function($){

  /*-----Ajax para consultar el progreso de los estudiantes en el curso------*/
  $.ajax({
   url:ajaxurl,
   type:'POST',
   data: { action: 'consultar_notas', id: $("#id_usuario").val()},
   success: function(output){
     //console.log(output);
     $("#tabla-notas").html(output);
     $(".tabla-prueba").DataTable({
      dom: 'Bfrtip',
      buttons: [
        {
        extend: 'excelHtml5',
         title: 'notas'
        }
      ]
     });
   },
   error: function( jqXHR, textStatus, errorThrown){
     alert('No se puede mostrar los contenidos, mensaje: ('+textStatus+ '/ '+errorThrown+')');
   }
  });

/*-----Ajax para consultar el ranking de las juegos------*/

  $.ajax({
   url:ajaxurl,
   type:'POST',
   data: { action: 'consultar_juegos'},
   success: function(output){
     //console.log(output);
     var idsJSON = JSON.parse(output);
     console.log(idsJSON);

      $.ajax({
       url:ajaxurl,
       type:'POST',
       data: { action: 'mostrar_ranking', id: $("#content-h5p").val(), ids: idsJSON},
       success: function(output){
         $("#div-ranking").html(output);
         $("#tabla-ranking").dataTable({
           responsive: true
         });
         //console.log(output);
       },
       error: function( jqXHR, textStatus, errorThrown){
         alert('No se puede mostrar los contenidos, mensaje: ('+textStatus+ '/ '+errorThrown+')');
       }
     });
   },
   error: function( jqXHR, textStatus, errorThrown){
     alert('No se puede mostrar los contenidos, mensaje: ('+textStatus+ '/ '+errorThrown+')');
   }
  });
});
