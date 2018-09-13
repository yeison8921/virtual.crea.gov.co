<?php get_header(); ?>
<br>
<br>
<!--Inicio Contenido -->
<div class="container-fluid">
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

        <?php if(is_page("Audiovisuales")) :?>
      <div class="col-lg-2">
        <button style="background-color: #ffffff; border-radius: 5px; color: #581508; border-color:#666666; border-width: 0.5px;  font-family: 'Local Van Condensed Regular', Regular !important; font-size: 16px;" class="btn-block">Reconocimiento Corporal</button>
        <br>
        <button style="background-color: #ffffff; border-radius: 5px; color: #581508; border-color:#666666; border-width: 0.5px;  font-family: 'Local Van Condensed Regular', Regular !important; font-size: 16px;" class="btn-block">Movimientos Universales</button>
        <br>
        <button style="background-color: #ffffff; border-radius: 5px; color: #581508; border-color:#666666; border-width: 0.5px;  font-family: 'Local Van Condensed Regular', Regular !important; font-size: 16px;" class="btn-block">Equilibrio Puntos de Apoyo</button>
        <br>
        <button style="background-color: #ffffff; border-radius: 5px; color: #581508; border-color:#666666; border-width: 0.5px;  font-family: 'Local Van Condensed Regular', Regular !important; font-size: 16px;" class="btn-block">Giros y Saltos</button>
        <br>
        <button style="background-color: #ffffff; border-radius: 5px; color: #581508; border-color:#666666; border-width: 0.5px;  font-family: 'Local Van Condensed Regular', Regular !important; font-size: 16px;" class="btn-block">Direcciones y Desplazamientos</button>
        <br>
        <button style="background-color: #ea7178; border-radius: 5px; color: #ffffff; border-color:#5e2d30; border-width: 0.5px;  font-family: 'Local Van Condensed Regular', Regular !important; font-size: 16px;" class="btn-block">Reconocimiento Corporal</button>

      </div>
    <?php endif; ?>

    <?php if(is_page("Creación literaria")) :?>
      <div class="row">
        <iframe src="<?php bloginfo('url'); ?>/wp-content/uploads/scorm/sitio_literatura/index.html" frameborder="0" width="1024" height="768"></iframe>
        <!--style="overflow: hidden; height: 100vh; width: 100%;-->
      </div>
    <?php endif; ?>



  <?php if(is_page("Introducción aula danza")) :?>
    <div class="row">
      <div class="col-lg-12" id="contenedor-index-danza">
        <div id="div-inicio-curso-danza" style="top: 50%; position: relative;">
          <div class="row">
            <div class="col-lg-offset-5 col-lg-2">
              <img src="<?php bloginfo('template_url'); ?>/danza/images/btn_cuerpo_interdisciplinar.png" id="btn_cuerpo_interdisciplinar" class="img-responsive">
            </div>
          </div>
        </div>
        <input type="hidden" value="<?php bloginfo('template_url'); ?>" id="bloginfo">
<!--         <div id="div-dropdown-index-danza">
          <div class="dropdown">
            <img class="btn dropdown-toggle img-responsive" src="<?php bloginfo('template_url'); ?>/danza/images/seleccion_modulo.png" alt="dropdown image" data-toggle="dropdown" style="width: 300px;">
            <ul class="dropdown-menu">
              <li><a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/cuerpo_imagen.png" alt="cuerpo_imagen" class="img-responsive" style="width: 300px;" ></a></li>
              <li><a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/cuerpo_movimiento.png" class="img-responsive" style="width: 300px;"></a></li>
              <li><a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/cuerpo_palabra.png" class="img-responsive" style="width: 300px;"></a></li>
              <li><a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/cuerpo_sonido.png" class="img-responsive" style="width: 300px;"></a></li>
              <li><a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/cuerpo_tecnologia.png" class="img-responsive" style="width: 300px;"></a></li>
              <li><a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/laboratorio_de_creacion.png" class="img-responsive" style="width: 300px;"></a></li>
            </ul>
          </div>
        </div> -->
        <div id="div-encabezado-info-aula-danza" class="row" style="display: none;">
          <div class="row">
            <div class="col-lg-12">
              <h2 style="color: white;"><center>CUERPO INTERDISCIPLINAR</center></h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-offset-5 col-lg-2">
              <a href="<?php bloginfo('url'); ?>/aula-danza"><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_iniciar_curso.png" name="btn_iniciar_curso" class="img-responsive"></a>
            </div>
          </div>
        </div>
        <div class="row"></div>        
        <div id="div-info-aula-danza" class="row" style="display: none;">
          <div class="col-lg-1 col-md-1"></div>
          <div class="col-lg-2 col-md-2"><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_introduccion_danza.png" name="btn_introduccion_danza" class="img-responsive"></div>
          <div class="col-lg-2 col-md-2"><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_objetivos_danza.png" name="btn_objetivos_danza" class="img-responsive"></div>
          <div class="col-lg-2 col-md-2"><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_metodologia_danza.png" name="btn_metodologia_danza" class="img-responsive"></div>
          <div class="col-lg-2 col-md-2"><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_publico_objetivo_danza.png" name="btn_publico_objetivo_danza" class="img-responsive"></div>
          <div class="col-lg-2 col-md-2"><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_creditos_danza.png" name="btn_creditos_danza" class="img-responsive"></div>
          <div class="col-lg-1 col-md-1"></div>
        </div>
        <div id="div-info-detallada-danza" class="row col-md-offset-5 col-md-6" style="text-align: left;">
          <div id="div-introduccion-danza" style="display: none;">
            <h2 style="text-align: right;"><strong>INTRODUCCIÓN</strong></h2>
            <p>Abordar la danza desde un aula virtual nos obliga a pensar en el cuerpo despojado de su materialidad, como un “no cuerpo”. El cuerpo en el espacio virtual; resumido a imagen, texto, código, lenguaje de programación; es susceptible a ser modificado, transformado y potenciado por las herramientas tecnológicas disponibles mediante interacciones que se hacen posibles gracias a la virtualidad.<br><br>El taller propone un aprendizaje de la danza a partir del cuerpo, teniendo en cuenta su naturaleza interdisciplinar. Los conceptos de ritmo, dinámica, forma y movimiento, como transversales en las artes, se abordan a través del cuerpo y el movimiento en las interacciones posibles con el sonido, la imagen, la palabra y la tecnología, considerada como un lenguaje artístico contemporáneo; para utilizarlos como elementos y/o herramientas en la creación interdisciplinar desde la danza.</p>
          </div>
          <div id="div-objetivos-danza" style="display: none;">
            <h2 style="text-align: right;"><strong>OBJETIVOS</strong></h2>
            <p><strong>General:</strong><br>Construir un curso de danza para el aula virtual partiendo de la propuesta “cuerpo interdisciplinar” para explorar las interacciones entre el cuerpo, el movimiento, la imagen, el sonido, la palabra y la tecnología.<br><br><strong>Específicos:</strong><br>
              <ol>
                <li>Explorar la relación entre cuerpo, movimiento, sonido, imagen, palabra y tecnología por medio de módulo que consta de una parte teórica y actividades prácticas.</li>
                <li>Investigar sobre el ritmo, la dinámica, la forma y el movimiento como conceptos transversales en las artes, con el apoyo de expertos en todas las áreas.</li>
                <li>Proponer actividades de creación artística/escénica que surjan de la investigación sobre los conceptos transversales y su significado para cada área artística.</li>
              </ol>
            </p>
          </div>
          <div id="div-metodolgia-danza" style="display: none;">
            <h2 style="text-align: right;"><strong>METODOLOGÍA</strong></h2>
            <p>El curso está compuesto por seis módulos, cinco teórico-prácticos y un módulo final completamente práctico en el que se integran los conceptos  y elementos abordados en el curso.<br><br>
              <strong>MÓDULO 1: CUERPO - MOVIMIENTO</strong><br>El primer módulo tiene como objetivo plantear el vínculo entre el cuerpo y el movimiento desde el reconocimiento corporal, la exploración de diversas posibilidades de movimiento y la relación con el espacio. También se hace una introducción al lenguaje de la danza mediante términos universales comunes a los diversos géneros y estilos.<br><br><strong>MÓDULO 2: CUERPO – SONIDO</strong><br>Se explora la relación entre lo corporal y lo sonoro a partir de  la  definición  de sonido, sus cualidades (tono, timbre, duración e intensidad) y su relación con el cuerpo mediante el movimiento.<br><br><strong>MÓDULO 3: CUERPO – IMÁGEN</strong><br>Se plantea la investigación de las relaciones entre lo  corporal y lo visual partiendo  del cuerpo como imagen, pasando por el gesto, la acción y la interpretación. El cuerpo en relación con los objetos y con el espacio teniendo en cuenta las diversas arquitecturas posibilitadoras (física, móvil y onírica).<br><br><strong>MÓDULO 4: CUERPO – PALABRA</strong><br>La palabra como estímulo, disparador y/o elemento de creación dentro de la creación artística/escénica. El cuerpo en relación con la palabra como constructora de sentido dentro de un código, un idioma y/o un lenguaje de programación. Explorando el significado, la ambigüedad, intención, rítmica y musicalidad de las palabras.<br><br><strong>MÓDULO 5: CUERPO – TECNOLOGÍA</strong><br>La tecnología como lenguaje, herramienta de composición y mecanismo para el desarrollo y/o la creación artística. Por medio del videodanza como forma artística híbrida, el uso de los smartphones y sus posibilidades técnicas se propone la exploración del cuerpo a través de la tecnología, modificando sus características y posibilidades físicas reales. La creación a partir del cuerpo en el espacio virtual.<br><br><strong>MÓDULO 6: LABORATORIO DE CREACIÓN</strong><br>El módulo final propone el desarrollo de un proyecto creativo que involucre algunas de las interacciones planteadas entre cuerpo, movimiento, sonido, imagen, palabra y tecnología. Las creaciones de los participantes se compartirán en un foro cuyo objetivo es generar un espacio de reflexión, socialización y retroalimentación para los participantes en relación a sus propuestas creativas.</p>
          </div>
          <div id="div-publico-objetivo-danza" style="display: none;">
            <h2 style="text-align: right;"><strong>PÚBLICO OBJETIVO</strong></h2>
            <p>Nuestro público objetivo es de jóvenes y adultos en las edades de los 15 a los 40 años de todos los estratos sociales que tengan acceso a internet.</p>
          </div>
          <div id="div-creditos-danza" style="display: none;">
            <h2 style="text-align: right;"><strong>CRÉDITOS</strong></h2>
          </div>
          <div id="div-btn-inicio-danza" class="col-lg-offset-4 col-lg-4" style="display: none; width: 216px;">
            <img src="<?php bloginfo('template_url'); ?>/danza/images/btn_inicio_danza.png" name="btn_inicio_danza" class="img-responsive">
          </div>
        </div>
      </div>
    </div>
  <?php endif; ?>

  <?php if(is_page("Aula danza")) :?>
    <input type="hidden" value="<?php bloginfo('template_url'); ?>" id="bloginfo">
    <!-- <div class="container-fluid"> -->
      <div class="row">
        <div class="col-lg-12" id="contenedor-aula-danza">
          <div id="div-regresar-modulo" class="row">
            <p>     <a href="" style="color: black; text-decoration: none;">SELECCIONA UN MÓDULO <i class="fas fa-caret-left"></i></a></p>
          </div>
          <div id="div-video-aula-danza" class="row" style="text-align: right;">
            <div class="col-lg-offset-6 col-lg-5">
              <h2 style="text-align: right; color: white;">MÓDULO 1 - CUERPO MOVIMIENTO</h2>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/6E2hYDIFDIU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>  
            </div>
          </div>
          <div id="div-modulos-aula-danza" class="row">
            <div class="col-lg-12">
              <div class="col-lg-1 col-md-1"></div>
              <div class="col-lg-2 col-md-2"><a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_reconocimiento_corporal.png" id="btn_reconocimiento_corporal" class="img-responsive" style="height: 296px"></a></div>
              <div class="col-lg-2 col-md-2"><a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_movimientos_universales.png" id="btn_movimientos_universales" class="img-responsive" style="height: 296px; width: 216px;"></a></div>
              <div class="col-lg-2 col-md-2"><a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_equilibrio_puntos_de_apoyo.png" id="btn_equilibrio_puntos_de_apoyo" class="img-responsive" style="height: 296px; width: 216px;"></a></div>
              <div class="col-lg-2 col-md-2"><a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_giros_y_saltos.png" id="btn_giros_y_saltos" class="img-responsive" style="height: 296px; width: 216px;"></a></div>
              <div class="col-lg-2 col-md-2"><a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_direcciones_y_desplazamientos.png" id="btn_direcciones_y_desplazamientos" class="img-responsive" style="height: 296px; width: 216px;"></a></div>
              <div class="col-lg-1 col-md-1"></div>
            </div>
          </div>
          <div id="div-reconocimiento-corporal" class="row" style="display: none;">
            <div class="col-lg-2" style="text-align: right;">
              <img src="<?php bloginfo('template_url'); ?>/danza/reconocimiento_corporal/btn_reconocimiento_corporal.png" class="img-responsive img-padding">
              <img src="<?php bloginfo('template_url'); ?>/danza/reconocimiento_corporal/btn_movimientos_universales.png" class="img-responsive img-padding">
              <img src="<?php bloginfo('template_url'); ?>/danza/reconocimiento_corporal/btn_equilibrio_y_puntos_de_apoyo.png" class="img-responsive img-padding">
              <img src="<?php bloginfo('template_url'); ?>/danza/reconocimiento_corporal/btn_giros_y_saltos.png" class="img-responsive img-padding">
              <img src="<?php bloginfo('template_url'); ?>/danza/reconocimiento_corporal/btn_direcciones_desplazamientos.png" class="img-responsive">
            </div>
            <div class="col-lg-offset-3 col-lg-6">
              <img src="<?php bloginfo('template_url'); ?>/danza/reconocimiento_corporal/btn_rompecabezas.png">
              <img src="<?php bloginfo('template_url'); ?>/danza/reconocimiento_corporal/btn_video.png">
            </div>
          </div>
          <div id="div-movimientos-universales" class="row" style="display: none; height: 100%;">
            <div id="div-botones-movimientos-universales" class="col-lg-2" style="text-align: right; padding-left: 30px;">
              <img src="<?php bloginfo('template_url'); ?>/danza/movimientos_universales/btn_reconocimiento_corporal.png" class="img-responsive">
              <br>
              <br>
              <img src="<?php bloginfo('template_url'); ?>/danza/movimientos_universales/btn_movimientos_universales.png" class="img-responsive">
              <br>
              <br>
              <img src="<?php bloginfo('template_url'); ?>/danza/movimientos_universales/btn_equilibrio_y_puntos_de_apoyo.png" class="img-responsive">
              <br>
              <br>
              <img src="<?php bloginfo('template_url'); ?>/danza/movimientos_universales/btn_giros_y_saltos.png" class="img-responsive">
              <br>
              <br>
              <img src="<?php bloginfo('template_url'); ?>/danza/movimientos_universales/btn_direcciones_desplazamientos.png" class="img-responsive">
            </div>
            <div id="div-contenido-principal-movimientos-universales" class="col-lg-offset-1 col-lg-5" style="padding-left: 70px;">
              <h2>MOVIMIENTOS UNIVERSALES</h2>
              <br>
              <br>
              <p>La danza o el baile es un arte donde se utiliza el movimiento del cuerpo usualmente con música, como una forma de expresión y de interacción social, con fines de entretenimiento, artisticos o reli- giosos. Es el movimiento en el espacio que se realiza con una parte o todo el cuerpo del ejecutante, con cierto compás o ritmo como expresión de sentimientos individuales, o de símbolos de la cultura y la sociedad. <br><br>En este sentido, la danza también es una forma de comunicación, ya que se usa el lenguaje no verbal entre los seres humanos, donde el bailarín o bailarina expresa sentimientos y emociones a través de sus movimientos y gestos. Se realiza mayormente con música, ya sea una canción, pieza musical o sonidos. <br><br>La danza o el baile es un arte donde se utiliza el movimiento del cuerpo usualmente con música, como una forma de expresión y de interacción social, con fines de entretenimiento, artisticos o religiosos.<br><br>Es el movimiento en el espacio que se realiza con una parte o todo el cuerpo del ejecutante, con cierto compás o ritmo como expresión de sentimientos individuales, o de simbolos de la cultura y la sociedad.</p>
            </div>
            <div id="div-contenido-secundario-movimientos-universales" class="col-lg-4">
              <p style="padding-left: 20px; padding-right: 50px;">La danza y sus diferentes géneros se conectan directamente casi con todos los movimientos los cuales son llamados universales en este módulo, ya que se convierte en las técnicas para expresar por medio del baile la interacción de diversos elementos los cuales son llamados por nombres como Plie Releve, Cambre o Flex.</p>
              <br>
              <div style="text-align: center;">
                <img src="<?php bloginfo('template_url'); ?>/danza/movimientos_universales/btn_juega.png">
                <img src="<?php bloginfo('template_url'); ?>/danza/movimientos_universales/btn_video.png">
              </div>
            </div>
          </div>
          <div id="div-equilibrio" class="row" style="display: none; height: 100%;">
            <div id="div-botones-equilibrio" class="col-lg-2" style="text-align: right; padding-left: 30px;">
              <img src="<?php bloginfo('template_url'); ?>/danza/equilibrio/btn_reconocimiento_corporal.png" class="img-responsive">
              <br>
              <br>
              <img src="<?php bloginfo('template_url'); ?>/danza/equilibrio/btn_movimientos_universales.png" class="img-responsive">
              <br>
              <br>
              <img src="<?php bloginfo('template_url'); ?>/danza/equilibrio/btn_equilibrio_y_puntos_de_apoyo.png" class="img-responsive">
              <br>
              <br>
              <img src="<?php bloginfo('template_url'); ?>/danza/equilibrio/btn_giros_y_saltos.png" class="img-responsive">
              <br>
              <br>
              <img src="<?php bloginfo('template_url'); ?>/danza/equilibrio/btn_direcciones_desplazamientos.png" class="img-responsive">
            </div>
            <div id="div-contenido-principal-equilibrio" class="col-lg-offset-1 col-lg-4" style="padding-left: 70px;">
              <h2>EQUILIBRIO PUNTOS DE APOYO</h2>
              <br>
              <br>
              <p>Los puntos de apoyo o también llamados puntos de equilibrio, son esas partes del cuerpo que están sobre una superficie fija (como el suelo) y a partir de los cuales se puede apoyar el resto del cuerpo ya sea para generar una posición estática como una parada de manos, o una posición que luego se mueva como un giro.</p>
            </div>
            <div id="div-contenido-secundario-equilibrio" class="col-lg-5" style="text-align: center;">
              <img src="<?php bloginfo('template_url'); ?>/danza/equilibrio/btn_juega.png">
              <img src="<?php bloginfo('template_url'); ?>/danza/equilibrio/btn_video.png">
            </div>
          </div>
          <!--  -->
          <div id="div-giros" class="row" style="display: none; height: 100%;">
            <div id="div-botones-giros" class="col-lg-2" style="text-align: right; padding-left: 30px;">
              <img src="<?php bloginfo('template_url'); ?>/danza/giros/btn_reconocimiento_corporal.png" class="img-responsive">
              <br>
              <br>
              <img src="<?php bloginfo('template_url'); ?>/danza/giros/btn_movimientos_universales.png" class="img-responsive">
              <br>
              <br>
              <img src="<?php bloginfo('template_url'); ?>/danza/giros/btn_equilibrio_y_puntos_de_apoyo.png" class="img-responsive">
              <br>
              <br>
              <img src="<?php bloginfo('template_url'); ?>/danza/giros/btn_giros_y_saltos.png" class="img-responsive">
              <br>
              <br>
              <img src="<?php bloginfo('template_url'); ?>/danza/giros/btn_direcciones_desplazamientos.png" class="img-responsive">
            </div>
            <div id="div-contenido-principal-giros" class="col-lg-offset-1 col-lg-4" style="padding-left: 70px;">
              <h2>GIROS Y SALTOS</h2>
              <br>
              <br>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mauris rutrum, dui curae facilisi ante facilisis phasellus quis eget aliquet magna, metus praesent hac nulla massa est orci mi. Nullam nisl sapien interdum arcu mollis auctor nec id, metus cum vel parturient lacinia penatibus. Penatibus duis elementum ut feugiat vestibulum integer, vivamus sodales habitant pretium a, felis congue imperdiet etiam risus. <br><br>In nec dignissim enim euismod turpis torquent nisi sapien nulla tempus mi conubia ante molestie ullamcorper varius, orci suspendisse semper curabitur habitasse porta laoreet nullam ligula dictum dis magnis nostra proin. Eros cum magna facilisi duis lacus purus ullamcorper blandit sodales, curabitur id dapibus aptent sociis erat ultrices dictumst diam, vulputate pretium vivamus iaculis molestie mus phasellus vel. Inceptos blandit odio ultricies proin fusce donec lacus morbi facilisi orci, velit ridiculus turpis per nostra et mattis risus facilisis, dictumst montes pharetra eu urna purus vehicula metus laoreet.
            </div>
            <div id="div-contenido-secundario-giros" class="col-lg-5" style="text-align: center;">
              <img src="<?php bloginfo('template_url'); ?>/danza/giros/btn_cualidades físicas.png">
              <img src="<?php bloginfo('template_url'); ?>/danza/giros/btn_video.png">
            </div>
          </div>

        </div>
      </div>
    <!-- </div> -->

  <?php endif; ?>
  <?php the_content(); ?>
<?php endwhile; endif; ?>

</div>

<!--fin contenido -->
<br>
<br>
<?php get_footer(); ?>
