jQuery(document).ready(function($) {
  $("#uploadAudio").validate({
    rules:{
      titulo:{
        required: true
      },
      descripcion:{
        required: true
      },
      audioFile: {
        required: true,
        accept: "audio/*"
      },
    },
    messages:{
      titulo:{
        required: "Por favor ingrese un título"
      },
      descripcion:{
        required: "Por favor ingrese una descripción"
      },
      audioFile: {
        required: "Por favor seleccione un archivo",
        accept: "Solo se permiten archivos en formato mp3"
      },
    },
    invalidHandler: function(event, validator) {
      return false;
    },
    errorPlacement: function(error, element) {
      $(element).closest('.form-group').find('.help-block').html(error.html());
    },
    highlight: function(element) {
      $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
      $(element).closest('.form-group').find('.help-block').html('');
    },
    submitHandler: function(form) {
      subirAudio();
    },
  });

  function subirAudio(){
    if($("#lat").val() == "" || $("#lng").val() == ""){
      swal({
        title: "Error",
        text: "Por favor selecciona tu ubicación haciendo clic en cualquier parte del mapa.",
        type: "warning",
      });
    }
    else{
      var audio_file = $("#audioFile")[0].files[0];
      var datos = new FormData();
      datos.append('action', 'guardarAudio');
      datos.append('id', $("#id").val());
      datos.append('titulo', $("#titulo").val());
      datos.append('descripcion', $("#descripcion").val());
      datos.append('lat', $("#lat").val());
      datos.append('lng', $("#lng").val());
      datos.append('audio', audio_file);
      swal({
        title: "Subiendo audio",
        text: "Por favor espere",
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        onOpen: () => {
          swal.showLoading()
        },
      });
      $.ajax({
        url: ajaxurl,
        contentType: false,
        processData: false,
        dataType: "html",
        type: "POST",
        data: datos,
        success: function(result){
          swal({
            title: "Bien hecho",
            text: "El audio se ha guardado correctamente.",
            type: "success"
          }). then(function(){
            window.location.href = "localhost/virtual.crea.gov.co/aula/consulta-mapa-artes-electronicas";
          });
        },error: function(result){
          swal({
            title: "Error",
            text: "No se ha podido guardar el audio, por favor vuelva a intentarlo.",
            type: "warning",
          });
          }
        });
    }
  }
});

var map;
var marker;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    //minZoom: 11,
    //maxZoom: 17,
    center: {
      lat: 4.710988599999999,
      lng: -74.072092
    },
  });
  var infoWindow = new google.maps.InfoWindow({map: map});
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      infoWindow.setPosition(pos);
      infoWindow.setContent('<h4>Hemos detectado tu ubicación</h4>');
      map.setCenter(pos);
      jQuery("#lat").val(pos["lat"]);
      jQuery("#lng").val(pos["lng"]);
    }, function() {
      jQuery("#info").show();
      jQuery("#info").html("<h4><strong>Hemos detectado que no has compartido tu ubicación, por favor selecciona tu ubicación haciendo clic en cualquier parte del mapa.<strong></h4>")
      google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
        jQuery("#lat").val(event.latLng.lat());
        jQuery("#lng").val(event.latLng.lng());
      });
      function placeMarker(location) {
        if (marker) {
          marker.setPosition(location);
        } else {
          marker = new google.maps.Marker({
            position: location,
            map: map
          });
        }
      }
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: No has compartido tu ubicación' :
    'Error: Your browser doesn\'t support geolocation.');
  }
