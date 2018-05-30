<?php
add_action('wp_head','ajaxurl');
function ajaxurl() {
?>
<script type="text/javascript">
var ajaxurl = '<?php echo admin_url('admin-ajax.php'); ?>';
</script>


<?php
}

add_action('wp_ajax_consultar_notas', 'consultar_notas');
add_action('wp_ajax_nopriv_consultar_notas', 'consultar_notas');

function consultar_notas(){
  $id=$_POST['id'];
  global $wpdb;
  $sql="SELECT grp.ID,grp.post_title, grp.CL AS 'Cantidad_lecciones',est.display_name AS 'Nombre',est.LR AS 'Lecciones_realizadas' FROM (SELECT
      P.ID,
      U.display_name,
      count(DISTINCT LUI.item_id) AS LR
      FROM ".$wpdb->prefix."learnpress_user_items LUI
      JOIN ".$wpdb->prefix."posts P ON P.ID=LUI.ref_id
      JOIN ".$wpdb->prefix."users U ON U.ID=LUI.user_id
      WHERE P.post_author=".$id." AND P.post_type='lp_course' AND LUI.status='completed'
      group by LUI.user_id) AS est
      JOIN(
      SELECT
      P.ID,
      P.post_title,
      COUNT(LSI.section_item_id) AS CL
      FROM ".$wpdb->prefix."posts P
      JOIN ".$wpdb->prefix."learnpress_sections LS ON LS.section_course_id=P.ID
      JOIN ".$wpdb->prefix."learnpress_section_items LSI on LSI.section_id=LS.section_id
      WHERE P.post_author=".$id."
      group by P.ID) AS grp ON grp.ID = est.ID";
  $results = $wpdb->get_results($sql, OBJECT);
  $curso = 0;
  $val = 0;
  $col = 1;
  echo "<span>A continuación encontrará el progeso de los cursos que le fueron asignados</span> <br> <br>";
  echo "<div class='panel-group' id='accordion'>";
  echo "<div class='panel panel-default'>";
  foreach ($results as $clave => $valor) {
    if($curso != $valor->ID){
        echo "<div class='panel-heading'>";
        echo "<h4 class='panel-title'>";
        echo "<a data-toggle='collapse' data-parent='#accordion' href='#collapse$col'>$valor->post_title</a>";
        echo "</h4>";
        echo "</div>";
        echo "<div id='collapse$col' class='panel-collapse collapse'>";
        echo "<div class='panel-body'>";
        echo "<table class='display tabla-prueba table-responsive'>";
        echo "<thead>";
        echo '<th>Nombre</th>';
        echo '<th>Lecciones realizadas</th>';
        echo '<th>Total de lecciones</th>';
        echo '<th>Progreso</th>';
        echo '</thead>';
        echo "<tbody>";
        $curso=$valor->ID;
        $col = $col + 1;
    }
    if($curso == $valor->ID){
      $progreso = 0;
      $progreso = (($valor->Lecciones_realizadas * 100) / $valor->Cantidad_lecciones);
      echo "<tr>";
        echo "<td>".$valor->Nombre."</td>";
        echo "<td>".$valor->Lecciones_realizadas."</td>";
        echo "<td>".$valor->Cantidad_lecciones."</td>";
        echo "<td>".round($progreso, 2, PHP_ROUND_HALF_UP) ." %</td>";
      echo "</tr>";
      $val = $val + 1;
      if($curso != $results[$val]->ID){
        echo "</tbody>";
        echo "</table>";
        echo "</div>";
        echo "</div>";
      }
    }
  }
  echo "</div>";
  echo "</div>";

  die();
}
