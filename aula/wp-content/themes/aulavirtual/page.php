<?php get_header(); ?>
<br>
<br>
      <!--Inicio Contenido -->
      <div class="container my-5">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <h2><?php the_title(); ?></h2>
        <?php if(is_page("Artes electrónicas")) :?>
          <form id="uploadAudio" action="" method="post" enctype="multipart/form-data">
            <input type="hidden" name="id" id="id" value="<?php echo get_current_user_id(); ?>">
            <div class="form-group">
              <label for="">Título</label>
              <input class="form-control" type="text" id="titulo" name="titulo" placeholder="Título del audio" required>
            </div>
            <div class="form-group">
              <label for="">Descripción</label>
              <textarea class="form-control" id="descripcion" name="descripcion" cols="40" rows="5" placeholder="Escriba una descripción" required></textarea>
            </div>
            <div class="form-group">
              <div class="col-sm-6">
                <input class="form-control" type="hidden" name="lat" id="lat">
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-6">
                <input class="form-control" type="hidden" name="lng" id="lng">
              </div>
            </div>
            <br><br>
            <div id="info" class="row bg-warning" style="text-align: center; display: none;">
            </div>
            <br>
            <div class="form-group">
              <div id="map" style="height: 768px">
              </div>
            </div>
            <div class="form-group">
              <label for="">Subir archivo</label>
              <input type="file" id="audioFile" name="audioFile" accept="audio/mp3" required>
              <p class="help-block">Solo se permiten audios en formato mp3.</p>
            </div>
            <div class="form-group">
              <div class="col-sm-6 col-sm-offset-3">
              <button type="submit" id="guardar" class="form-control btn btn-primary">Guardar</button>
              </div>
            </div>
            <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCPjto4XGyWcmoIMfdp0g3QRgo5ByAW-L8&callback=initMap">
            </script>
            </form>
          <?php endif; ?>
          <?php if(is_page("Consulta mapa artes electrónicas")) :?>
            <div id="map" style="height: 768px">
              <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCPjto4XGyWcmoIMfdp0g3QRgo5ByAW-L8&callback=initMap">
              </script>
          <?php endif; ?>

          <?php if(is_page("Música")) :?>
            <div class="row">
              <iframe src="<?php bloginfo('url'); ?>/wp-content/uploads/scorm/sitio_musica/index.html" frameborder="0" width="1024" height="768"></iframe>
              <!--style="overflow: hidden; height: 100vh; width: 100%;-->
            </div>
          <?php endif; ?>

        <?php the_content(); ?>
        <?php endwhile; endif; ?>
      </div>

      <!--fin contenido -->
      <br>
      <br>
<?php get_footer(); ?>
