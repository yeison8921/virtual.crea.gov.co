<?php get_header(); ?>
<!--Inicio Contenido -->
<br>
<div class="container-fluid page-header">
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <!-- <h2><?php the_title(); ?></h2>-->
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
    <?php if(is_page("Consulta mapa artes electrónicas")) :?>
      <div class="container">
        <div id="map">
        </div>
      </div>
    <?php endif; ?>
    <?php if(is_page("Música")) :?>
      <div class="row">
        <iframe src="<?php bloginfo('url'); ?>/wp-content/uploads/scorm/sitio_musica/index.html" frameborder="0" width="1024" height="768"></iframe>
      </div>
    <?php endif; ?>
    <?php if(is_page("Audiovisuales")) :?>
    <?php endif; ?>
    <?php if(is_page("Creación literaria")) :?>
      <div class="row">
        <iframe src="<?php bloginfo('url'); ?>/wp-content/uploads/scorm/sitio_literatura/index.html" frameborder="0" width="1024" height="768"></iframe>
      </div>
    <?php endif; ?>
    <?php if(is_page("Introducción aula danza")) :?>
      <div class="row" id="contenedor-index-danza">
        <input type="hidden" value="<?php bloginfo('template_url'); ?>" id="bloginfo">
        <div class="row" id="div-inicio-curso-danza">
          <a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_cuerpo_interdisciplinar.png" id="btn_cuerpo_interdisciplinar" width="250" class="img-responsive center-block"></a>
        </div>
        <div id="div-encabezado-info-aula-danza" class="row" style="display: none;">
          <h2 style="color: white;"><center>CUERPO INTERDISCIPLINAR</center></h2>
          <a href="<?php bloginfo('url'); ?>/aula-danza"><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_iniciar_curso.png" name="btn_iniciar_curso" class="img-responsive center-block" width="250"></a>
        </div>
        <div class="row"></div>        
        <div id="div-info-aula-danza" class="row" style="display: none;">
          <div class="col-lg-offset-1 col-lg-2 col-md-1-5"><a href="#">
            <img src="<?php bloginfo('template_url'); ?>/danza/images/btn_introduccion_danza.png" id="btn_introduccion_danza" class="img-responsive">
          </a></div>
          <div class="col-lg-2 col-md-1-5"><a href="#">
            <img src="<?php bloginfo('template_url'); ?>/danza/images/btn_objetivos_danza.png" id="btn_objetivos_danza" class="img-responsive">
          </a></div>
          <div class="col-lg-2 col-md-1-5"><a href="#">
            <img src="<?php bloginfo('template_url'); ?>/danza/images/btn_metodologia_danza.png" id="btn_metodologia_danza" class="img-responsive">
          </a></div>
          <div class="col-lg-2 col-md-1-5"><a href="#">
            <img src="<?php bloginfo('template_url'); ?>/danza/images/btn_publico_objetivo_danza.png" id="btn_publico_objetivo_danza" class="img-responsive">
          </a></div>
          <div class="col-lg-2 col-md-1-5"><a href="#">
            <img src="<?php bloginfo('template_url'); ?>/danza/images/btn_creditos_danza.png" id="btn_creditos_danza" class="img-responsive">
          </a></div>
        </div>
        <!-- Inicio div info detallada danza -->
        <div id="div-info-detallada-danza" class="col-lg-offset-5 col-lg-6 col-md-offset-3 col-md-8" style="text-align: left;">
          <div class="row" id="div-introduccion-danza" style="display: none;">
            <h2 style="text-align: right;"><strong>INTRODUCCIÓN</strong></h2>
            <p>Abordar la danza desde un aula virtual nos obliga a pensar en el cuerpo despojado de su materialidad, como un “no cuerpo”. El cuerpo en el espacio virtual; resumido a imagen, texto, código, lenguaje de programación; es susceptible a ser modificado, transformado y potenciado por las herramientas tecnológicas disponibles mediante interacciones que se hacen posibles gracias a la virtualidad.<br><br>El taller propone un aprendizaje de la danza a partir del cuerpo, teniendo en cuenta su naturaleza interdisciplinar. Los conceptos de ritmo, dinámica, forma y movimiento, como transversales en las artes, se abordan a través del cuerpo y el movimiento en las interacciones posibles con el sonido, la imagen, la palabra y la tecnología, considerada como un lenguaje artístico contemporáneo; para utilizarlos como elementos y/o herramientas en la creación interdisciplinar desde la danza.</p>
          </div>
          <div class="row" id="div-objetivos-danza" style="display: none;">
            <h2 style="text-align: right;"><strong>OBJETIVOS</strong></h2>
            <p><strong>General:</strong><br>Construir un curso de danza para el aula virtual partiendo de la propuesta “cuerpo interdisciplinar” para explorar las interacciones entre el cuerpo, el movimiento, la imagen, el sonido, la palabra y la tecnología.<br><br><strong>Específicos:</strong><br>
              <ol>
                <li>Explorar la relación entre cuerpo, movimiento, sonido, imagen, palabra y tecnología por medio de módulo que consta de una parte teórica y actividades prácticas.</li>
                <li>Investigar sobre el ritmo, la dinámica, la forma y el movimiento como conceptos transversales en las artes, con el apoyo de expertos en todas las áreas.</li>
                <li>Proponer actividades de creación artística/escénica que surjan de la investigación sobre los conceptos transversales y su significado para cada área artística.</li>
              </ol>
            </p>
          </div>
          <div class="row" id="div-metodologia-danza" style="display: none;">
            <h2 style="text-align: right;"><strong>METODOLOGÍA</strong></h2>
            <p>El curso está compuesto por seis módulos, cinco teórico-prácticos y un módulo final completamente práctico en el que se integran los conceptos  y elementos abordados en el curso.<br><br>
              <strong>MÓDULO 1: CUERPO - MOVIMIENTO</strong><br>El primer módulo tiene como objetivo plantear el vínculo entre el cuerpo y el movimiento desde el reconocimiento corporal, la exploración de diversas posibilidades de movimiento y la relación con el espacio. También se hace una introducción al lenguaje de la danza mediante términos universales comunes a los diversos géneros y estilos.<br><br><strong>MÓDULO 2: CUERPO – SONIDO</strong><br>Se explora la relación entre lo corporal y lo sonoro a partir de  la  definición  de sonido, sus cualidades (tono, timbre, duración e intensidad) y su relación con el cuerpo mediante el movimiento.<br><br><strong>MÓDULO 3: CUERPO – IMÁGEN</strong><br>Se plantea la investigación de las relaciones entre lo  corporal y lo visual partiendo  del cuerpo como imagen, pasando por el gesto, la acción y la interpretación. El cuerpo en relación con los objetos y con el espacio teniendo en cuenta las diversas arquitecturas posibilitadoras (física, móvil y onírica).<br><br><strong>MÓDULO 4: CUERPO – PALABRA</strong><br>La palabra como estímulo, disparador y/o elemento de creación dentro de la creación artística/escénica. El cuerpo en relación con la palabra como constructora de sentido dentro de un código, un idioma y/o un lenguaje de programación. Explorando el significado, la ambigüedad, intención, rítmica y musicalidad de las palabras.<br><br><strong>MÓDULO 5: CUERPO – TECNOLOGÍA</strong><br>La tecnología como lenguaje, herramienta de composición y mecanismo para el desarrollo y/o la creación artística. Por medio del videodanza como forma artística híbrida, el uso de los smartphones y sus posibilidades técnicas se propone la exploración del cuerpo a través de la tecnología, modificando sus características y posibilidades físicas reales. La creación a partir del cuerpo en el espacio virtual.<br><br><strong>MÓDULO 6: LABORATORIO DE CREACIÓN</strong><br>El módulo final propone el desarrollo de un proyecto creativo que involucre algunas de las interacciones planteadas entre cuerpo, movimiento, sonido, imagen, palabra y tecnología. Las creaciones de los participantes se compartirán en un foro cuyo objetivo es generar un espacio de reflexión, socialización y retroalimentación para los participantes en relación a sus propuestas creativas.</p>
            </div>
            <div class="row" id="div-publico-objetivo-danza" style="display: none;">
              <h2 style="text-align: right;"><strong>PÚBLICO OBJETIVO</strong></h2>
              <p>Nuestro público objetivo es de jóvenes y adultos en las edades de los 15 a los 40 años de todos los estratos sociales que tengan acceso a internet.</p>
            </div>
            <div class="row" id="div-creditos-danza" style="display: none;">
              <h2 style="text-align: right;"><strong>CRÉDITOS</strong></h2>
            </div>
            <div id="div-btn-inicio-danza" class="row col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4" style="display: none; width: 216px;">
              <img src="<?php bloginfo('template_url'); ?>/danza/images/btn_inicio_danza.png" name="btn_inicio_danza" class="img-responsive">
            </div>
          </div>
          <!-- Fin div info detallada danza -->
        </div>
    <?php endif; ?>
    <?php if(is_page("Aula danza")) :?>
    <div class="row" id="contenedor-aula-danza">
      <div class="div-video">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 text-left">
          <a href="">SELECCIONE UN MÓDULO     <i class='fas fa-caret-left'></i></a>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-10 col-lg-7 text-right">
          <h2>MÓDULO 1 - CUERPO MOVIMIENTO</h2>
          <iframe width="545" height="300" src="https://www.youtube.com/embed/3x2ABSAMVno" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
      <div class="div-modulos">
        <div class="col-xs-6 col-sm-offset-2 col-sm-3 col-md-offset-0 col-md-1-5 col-lg-offset-1 col-lg-2">
          <a href="#"><center><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_reconocimiento_corporal.png" id="btn_mod_reconocimiento" class="img-responsive"></center></a>
        </div>
        <div class="col-xs-6 col-sm-offset-2 col-sm-3 col-md-offset-0 col-md-1-5 col-lg-offset-0 col-lg-2">
          <a href="#"><center><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_movimientos_universales.png" id="btn_mod_movimientos" class="img-responsive"></center></a>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-1-5 col-lg-2">
          <a href="#"><center><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_equilibrio_puntos_de_apoyo.png" id="btn_mod_equilibrio" class="img-responsive"></center></a>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-1-5 col-lg-2">
          <a href="#"><center><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_giros_y_saltos.png" id="btn_mod_giros" class="img-responsive"></center></a>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-1-5 col-lg-2">
          <a href="#"><center><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_direcciones_y_desplazamientos.png" id="btn_direcciones" class="img-responsive"></center></a>
        </div>        
      </div>
      <div class="div-mod-enc" style="height: 10vh; display: none;">
        <div class="col-lg-1 col-md-1" style="position: relative;">
          <img src="<?php bloginfo('template_url'); ?>/danza/images/logo_bogota.png">
        </div>
        <div class="col-lg-offset-3 col-lg-4 col-md-offset-3 col-md-4 text-center" style="position: relative; color: #9c474c;">
          <h2 class="tit-enc"></h2>
        </div>
        <div class="col-lg-offset-3 col-lg-1 col-md-offset-3 col-md-1" style="position: relative;">
          <img src="<?php bloginfo('template_url'); ?>/danza/images/logo_crea.png">
        </div>
      </div>
      <div class="div-con-mod col-lg-12 col-md-12" style="height: 85vh; display: none;">
        <div class="col-lg-3 col-md-4" style="height: 85vh; background:radial-gradient(ellipse 100% 150% at 75% 50% , rgba(236,146,156,1) 0%, rgba(236,146,156,1) 30%, rgba(136,86,89,1) 100%); ">
          <div class="div-btn-mod" style="top: 30%; position: relative;">
          </div>
        </div>
        <div class="col-lg-offset-1 col-lg-8 col-md-8" style="height: 85vh;">
          <div style="position: relative; top: 5vh; height: 10vh;">
            <h2 class="tit-con"></h2>
          </div>
          <div class="div-con-mod-uni" style="position: relative; top: 10vh; height: 65vh; display: none;">
            <div class="col-lg-6 col-md-6" style="position: relative;">
            </div>
            <div class="col-lg-6 col-md-6" style="position: relative;"></div>
          </div>
          <div class="div-con-mod-dob" style="position: relative; top: 10vh; height: 65vh;">
            <div class="col-lg-7 col-md-7" style="position: relative;">
            </div>
            <div class="col-lg-5 col-md-5" style="position: relative;"></div>
          </div>
        </div>
      </div>
    </div>
    <?php endif; ?>
  <?php the_content(); ?>
<?php endwhile; endif; ?>

</div>
<!--fin contenido -->
<?php get_footer(); ?>
