<?php
add_action('wp_ajax_consultar_juegos', 'consultar_juegos');
add_action('wp_ajax_nopriv_consultar_juegos', 'consultar_juegos');

add_action('wp_ajax_mostrar_ranking', 'mostrar_ranking');
add_action('wp_ajax_nopriv_mostrar_ranking', 'mostrar_ranking');

function consultar_juegos(){
  global $wpdb;
  $sql="SELECT id FROM ".$wpdb->prefix."h5p_contents";
  $results = $wpdb->get_results($sql, OBJECT);
  //echo '<pre>'.print_r($results,true).'</pre>';
  echo json_encode($results);
  die();

}
function mostrar_ranking(){
  global $wpdb;
  $id=str_replace("\\", "", $_POST['id']);
  $ids = $_POST['ids'];
  foreach ($ids as $clave => $valor) {
      $actividad = '[h5p id="'.$valor['id'].'"]';
      if($id==$actividad){
        $sql="SELECT
        C.title AS 'Actividad',
        U.display_name AS 'Estudiante',
        R.score AS 'Puntaje',
        (R.finished - R.opened) as 'Tiempo'
        FROM ".$wpdb->prefix."h5p_results AS R
        JOIN ".$wpdb->prefix."users AS U ON U.ID=R.user_id
        JOIN ".$wpdb->prefix."h5p_contents AS C ON C.id=R.content_id
        WHERE C.id=".$valor['id']."
        ORDER BY Puntaje DESC, Tiempo ASC LIMIT 5";
        $results = $wpdb->get_results($sql, OBJECT);
        echo
        "<table id='tabla-ranking' class='display table-responsive'>
        <thead>
        <th>Puesto</th>
        <th>Estudiante</th>
        <th>Puntaje</th>
        <th>Tiempo</th>
        </thead>
        <tbody>";
        $puesto = 1;
        foreach ($results as $clave => $valor) {
          echo "<tr>";
          echo "<td><img src='".get_template_directory_uri()."/images/medalla.png' width='30' heigth='30'></td>";
          //echo "<td>".$puesto."</td>";
          echo "<td>".$valor->Estudiante."</td>";
          echo "<td>".$valor->Puntaje." Puntos</td>";
          echo "<td>".conversorTiempo($valor->Tiempo)."</td>";
          echo "<tr>";
          $puesto++;
        }
        echo
        "</tbody>
        </table>";
      }
  }
  die();
}

function conversorTiempo($tiempo_en_segundos) {
    $horas = floor($tiempo_en_segundos / 3600);
    $minutos = floor(($tiempo_en_segundos - ($horas * 3600)) / 60);
    $segundos = $tiempo_en_segundos - ($horas * 3600) - ($minutos * 60);

    $hora_texto = "";
    if ($horas > 0 ) {
        $hora_texto .= $horas . " hor ";
    }

    if ($minutos > 0 ) {
        $hora_texto .= $minutos . " min ";
    }

    if ($segundos > 0 ) {
        $hora_texto .= $segundos . " seg";
    }

    return $hora_texto;
}

?>
