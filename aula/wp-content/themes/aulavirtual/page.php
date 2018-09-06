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
              <input class="form-control" type="text" id="titulo" name="titulo" placeholder="Título del audio">
              <span class="help-block" id="error"></span>
            </div>
            <div class="form-group">
              <label for="">Descripción</label>
              <textarea class="form-control" id="descripcion" name="descripcion" cols="40" rows="5" placeholder="Escriba una descripción"></textarea>
              <span class="help-block" id="error"></span>
              <input class="form-control" type="hidden" name="lat" id="lat">
              <input class="form-control" type="hidden" name="lng" id="lng">
            </div>
            <div id="info" class="row bg-warning" style="text-align: center; display: none;">
            </div>
            <br>
            <div class="form-group">
              <div id="map">
              </div>
            </div>
            <div class="form-group">
              <label for="">Subir audio</label>
              <input type="file" id="audioFile" name="audioFile">
              <span class="help-block" id="error"></span>
            </div>
            <div class="form-group">
              <div class="col-sm-6 col-sm-offset-3">
              <button type="submit" id="guardar" class="form-control btn btn-primary">Guardar</button>
              </div>
            </div>
            </form>
          <?php endif; ?>
          <div class="row">
            <?php if(is_page("Consulta mapa artes electrónicas")) :?>
              <div id="map">
              </div>
            <?php endif; ?>
          </div>

          <?php if(is_page("Música")) :?>
            <div class="row">
              <iframe src="<?php bloginfo('url'); ?>/wp-content/uploads/scorm/sitio_musica/index.html" frameborder="0" width="1024" height="768"></iframe>
              <!--style="overflow: hidden; height: 100vh; width: 100%;-->
            </div>
          <?php endif; ?>

          <?php if(is_page("Creación literaria")) :?>
            <div class="row">
              <iframe src="<?php bloginfo('url'); ?>/wp-content/uploads/scorm/sitio_literatura/index.html" frameborder="0" width="1024" height="768"></iframe>
              <!--style="overflow: hidden; height: 100vh; width: 100%;-->
            </div>
          <?php endif; ?>

        </div>
          <?php if(is_page("Danza")) :?>
            <div class ="container-fluid" id="contenedor-index-danza" style="position: relative;">
              <div id="div-dropdown-index-danza">
                <div class="dropdown">
                    <img class="btn dropdown-toggle img-responsive" src="<?php bloginfo('url'); ?>/wp-content/themes/aulavirtual/images/seleccion_modulo.png" alt="dropdown image" data-toggle="dropdown" style="width: 300px;">
                    <ul class="dropdown-menu">
                        <li><a href="#"><img src="<?php bloginfo('url'); ?>/wp-content/themes/aulavirtual/images/cuerpo_imagen.png" class="img-responsive" style="width: 300px;" ></a></li>
                        <li><a href="#"><img src="<?php bloginfo('url'); ?>/wp-content/themes/aulavirtual/images/cuerpo_movimiento.png" class="img-responsive" style="width: 300px;"></a></li>
                        <li><a href="#"><img src="<?php bloginfo('url'); ?>/wp-content/themes/aulavirtual/images/cuerpo_palabra.png" class="img-responsive" style="width: 300px;"></a></li>
                        <li><a href="#"><img src="<?php bloginfo('url'); ?>/wp-content/themes/aulavirtual/images/cuerpo_sonido.png" class="img-responsive" style="width: 300px;"></a></li>
                        <li><a href="#"><img src="<?php bloginfo('url'); ?>/wp-content/themes/aulavirtual/images/cuerpo_tecnologia.png" class="img-responsive" style="width: 300px;"></a></li>
                        <li><a href="#"><img src="<?php bloginfo('url'); ?>/wp-content/themes/aulavirtual/images/laboratorio_de_creacion.png" class="img-responsive" style="width: 300px;"></a></li>
                    </ul>
                </div>
              </div>
            </div>
          <?php endif; ?>

        <?php the_content(); ?>
        <?php endwhile; endif; ?>

      <!--fin contenido -->
      <br>
      <br>
<?php get_footer(); ?>
