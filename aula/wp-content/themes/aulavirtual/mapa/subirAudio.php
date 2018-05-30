<?php
add_action('wp_ajax_guardarAudio', 'guardarAudio');
add_action('wp_ajax_nopriv_guardarAudio', 'guardarAudio');

function guardarAudio(){
  $id_usuario = $_POST["id"];
  $titulo = $_POST["titulo"];
  $descripcion = $_POST["descripcion"];
  $lat = $_POST["lat"];
  $lng = $_POST["lng"];

  if (0 < $_FILES['audio']['error']){
    echo 'Error: ' . $_FILES['audio']['error'] . '<br>';
  }
  else{
    $fileName = str_replace(" ", "_", $_FILES['audio']['name']);
    $fileDir = "/virtual.crea.gov.co/aula/wp-content/uploads/audios/" . $fileName;
    move_uploaded_file($_FILES['audio']['tmp_name'], $_SERVER['DOCUMENT_ROOT']."/virtual.crea.gov.co/aula/wp-content/uploads/audios/" . $fileName);
    global $wpdb;
    $wpdb->insert("av_mapas", array(
      "id_usuario" => $id_usuario,
      "titulo" => $titulo,
      "descripcion" => $descripcion,
      "lat" => $lat,
      "lng" => $lng,
      "ruta_archivo" => $fileDir,
    ));
    die();
  }
}
