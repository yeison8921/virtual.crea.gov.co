<?php get_header(); ?>
<!--Inicio Contenido -->
<div class="container-fluid">
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
    <?php if(is_page("Introducción aula música")) :?>
      <input type="hidden" id="blog-info" value="<?php bloginfo('url'); ?>">
      <div class="row" id="contenedor-index-musica">
        <div class="row col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4" id="div-inicio-curso-musica">
          <button class="btn btn-block btn-musica-p" id="btn-salones">SALONES INTERACTIVOS DE MÚSICA</button>
        </div>
        <div class="row col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4" id="div-inicio-info-aula-musica" style="display: none;">
          <button class="btn btn-block btn-musica-p" id="btn-inicio-musica">INICIAR</button>
        </div>
        <div class="row"></div>
        <div id="div-info-aula-musica" class="row" style="display: none;">
          <div class="col-lg-offset-1 col-lg-2 col-md-1-5">
            <button class="btn btn-block btn-musica-s">Introducción</button>
          </div>
          <div class="col-lg-2 col-md-1-5">
            <button class="btn btn-block btn-musica-s">Objetivos</button>
          </div>
          <div class="col-lg-2 col-md-1-5">
            <button class="btn btn-block btn-musica-s">Metodología</button>
          </div>
          <div class="col-lg-2 col-md-1-5">
            <button class="btn btn-block btn-musica-s">Público objetivo</button>
          </div>
          <div class="col-lg-2 col-md-1-5">
            <button class="btn btn-block btn-musica-s">Créditos</button>
          </div>
        </div>
        <div class="row col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4" id="div-sel-modulo-musica" style="display: none;">
          <div id="div-dropdown-modulo-musica">
            <div class="dropdown">
              <button class="btn btn-block btn-musica-d dropdown-toggle" type="button" data-toggle="dropdown">SELECCIONA UN MÓDULO<!-- <i class="fas fa-caret-down"></i> --></button>
              <ul class="dropdown-menu btn-block">
                <li><button class="btn btn-block btn-musica-d">Andina</button></li>
                <li><button class="btn btn-block btn-musica-d">Llanero</button></li>
                <li><button class="btn btn-block btn-musica-d">Pacífico</button></li>
                <li><button class="btn btn-block btn-musica-d">Atlántico</button></li>
                <li><button class="btn btn-block btn-musica-d">Carranga</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    <?php endif; ?>
    <?php if(is_page("Música")) :?>
      <input type="hidden" id="blog-info" value="<?php bloginfo('url'); ?>">
      <div class="row" id="div-mod-enc-mus">
        <input type="hidden" value="<?php bloginfo('template_url'); ?>" id="bloginfo">
        <div class="col-lg-1 col-md-1 text-center">
          <img src="<?php bloginfo('template_url'); ?>/images/logo_bogota.png">
        </div>
        <div class="col-lg-offset-3 col-lg-4 col-md-offset-4 col-md-4 text-center" style="color: #9c474c;">
          <h2 class="tit-enc" style="font-size: 60px;"><strong>MÚSICA ANDINA</strong></h2>
        </div>
        <div class="col-lg-offset-3 col-lg-1 col-md-offset-4 col-md-1 text-center">
          <img src="<?php bloginfo('template_url'); ?>/images/logo_crea.png">
        </div>
      </div>
      <div class="row" id="contenedor-aula-musica">
        <div class="col-lg-offset-5 col-lg-6 col-md-offset-3 col-md-8" id="div-info-andina">
          <div class="col-lg-offset-1 col-lg-11">
            <h2>La Música Andina</h2>
            <br>
            <p>Es un término que se aplica a una gama muy vasta de géneros musicales originados en los Andes sudamericanos. Esta área incluye principalmente los andes del Perú y Bolivia; sierras de Ecuador, noroeste de Argentina, norte de Chile y suroeste de Colombia y Venezuela.<br><br>El término se usa a menudo como sinónimo del estilo musical típico del altiplano e interpretado generalmente por aymaras, quechuas y otros pueblos de dicha región, estilo caracterizado por melodías nostálgicas y evocativas interpretadas con flautas de caña y charangos. Pero en sentido estricto la expresión "música andina" englobaría no sólo esta música sino también los restantes estilos y formaciones instrumentales presentes a lo largo y ancho de la geografía andina</p>
          </div>
          <div class="col-lg-4 text-center">
            <a href="#"><img src="<?php bloginfo('template_url'); ?>/musica/images/icono_sala_teorica.jpg">
              <button class="btn btn-block btn-musica-s">Sala Teórica</button></a>
            </div>
            <div class="col-lg-4 text-center">
              <a href="#"><img src="<?php bloginfo('template_url'); ?>/musica/images/icono_sala_interactiva.jpg">
                <button class="btn btn-block btn-musica-s">Sala Interactiva</button></a>
              </div>
              <div class="col-lg-4 text-center">
                <a href="#"><img src="<?php bloginfo('template_url'); ?>/musica/images/icono_sala_general.jpg">
                  <button class="btn btn-block btn-musica-s">Sala General</button></a>
                </div>
              </div>
              <div id="div-con-mod-andina" style="display: none;">
                <div class="col-lg-3 col-md-4 col-sm-4" id="div-btn-mod-mus" style="height: 750px;">
                  <div style="margin-top: 60%;">
                    <div class='row'>
                      <div class="col-lg-1 col-md-1 col-sm-1">  
                        <i class="fas fa-2x fa-caret-right flecha-musica" id="flecha-guabina"></i>
                      </div>
                      <div class="col-lg-9 col-md-10 col-sm-10">
                        <button class='btn btn-block btn-musica-t' id="btn-guabina">Guabina</button>
                      </div>
                    </div>
                    <div class='row'>
                      <div class="col-lg-1 col-md-1 col-sm-1">
                        <i class="fas fa-2x fa-caret-right flecha-musica" id="flecha-pasillo"></i>
                      </div>
                      <div class="col-lg-9 col-md-10 col-sm-10">
                        <button class='btn btn-block btn-musica-s' id="btn-pasillo">Pasillo</button>
                      </div>
                    </div>
                    <div class='row'>
                      <div class="col-lg-1 col-md-1 col-sm-1">
                       <i class="fas fa-2x fa-caret-right flecha-musica" id="flecha-bambuco"></i>
                     </div>
                     <div class="col-lg-9 col-md-10 col-sm-10">
                      <button class='btn btn-block btn-musica-s' id="btn-bambuco">Bambuco</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-offset-1 col-lg-8">
                <div class="col-lg-12" id="div-tit-andina">
                  <h2>SALA TEÓRICA</h2>
                </div>
                <div class="col-lg-7" id="div-tex-andina">
                  <p>En Colombia, el término "música andina" se refiere a una serie de géneros musicales de algunos departamentos surcados por montañas de la Cordillera de los Andes, la cual en territorio Colombiano se divide en tres ramales conocidos como la Cordillera Oriental, Cordillera Central y Cordillera Occidental, comprendiendo entre otros los departamentos de Nariño, Cauca, Valle del Cauca, Huila, Tolima, Cundinamarca, Santander, Norte de Santander, Antioquia Boyacá y el Eje cafetero.<br><br>Debido a su extensa cobertura geográfica, la música andina colombiana es muy amplia y variada, ya que cada región le imprime su toque cultural, derivando varios ritmos entre los cuales esta el bambuco, guabina, torbellino, sanjuanero, la carranga, pasillo rajaleña, bunde, música guasca, etc.</p>
                </div>
                <div class="col-lg-5" id="div-img-andina">
                  <img src="<?php bloginfo('template_url'); ?>/musica/images/instrumento.jpg" class="img-responsive">
                  <hr>
                  <p>La guaracha es un instrumento musucal idiófono de raspado utilizado mayormente en el vallenato. Se fabrica, entre otros, de caña o de lata.</p>
                </div>
                <div class="col-lg-7">
                  <div class="col-lg-4"><button class="btn btn-block btn-musica-s" id="btn-ritmo-and">Ritmo</button></div>
                  <div class="col-lg-4"><button class="btn btn-block btn-musica-s" id="btn-melodia-and">Melodía</button></div>
                  <div class="col-lg-4"><button class="btn btn-block btn-musica-s" id="btn-armonia-and">Armonía</button></div>
                </div>
              </div>
            </div>
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
        <div class="row text-center" id="div-inicio-curso-danza">
          <a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_cuerpo_interdisciplinar.png" id="btn_cuerpo_interdisciplinar" width="250" class="img-responsive center-block"></a>
        </div>
        <div id="div-encabezado-info-aula-danza" class="row" style="display: none;">
          <h2 style="color: white;"><center>CUERPO INTERDISCIPLINAR</center></h2>
          <a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_iniciar_curso.png" id="btn_iniciar_curso" class="img-responsive center-block" width="250"></a>
        </div>
        <div class="row"></div>        
        <div id="div-info-aula-danza" class="row" style="display: none;">
          <div class="col-lg-offset-1 col-lg-2 col-md-1-5">
            <a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_introduccion_danza.png" id="btn_introduccion_danza" class="img-responsive"></a>
          </div>
          <div class="col-lg-2 col-md-1-5">
            <a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_objetivos_danza.png" id="btn_objetivos_danza" class="img-responsive"></a>
          </div>
          <div class="col-lg-2 col-md-1-5">
            <a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_metodologia_danza.png" id="btn_metodologia_danza" class="img-responsive"></a>
          </div>
          <div class="col-lg-2 col-md-1-5">
            <a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_publico_objetivo_danza.png" id="btn_publico_objetivo_danza" class="img-responsive"></a>
          </div>
          <div class="col-lg-2 col-md-1-5">
            <a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_creditos_danza.png" id="btn_creditos_danza" class="img-responsive"></a>
          </div>
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
          <div class="row" id="div-sel-modulo" style="display: none;">
            <div id="div-dropdown-modulo-danza">
              <div class="dropdown">
                <img class="btn dropdown-toggle img-responsive" src="<?php bloginfo('template_url'); ?>/danza/images/seleccion_modulo.png" alt="dropdown image" data-toggle="dropdown">
                <ul class="dropdown-menu">
                  <li><a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/cuerpo_imagen.png" alt="cuerpo_imagen" class="img-responsive"></a></li>
                  <li><a href="<?php bloginfo('url'); ?>/aula-danza"><img src="<?php bloginfo('template_url'); ?>/danza/images/cuerpo_movimiento.png" class="img-responsive"></a></li>
                  <li><a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/cuerpo_palabra.png" class="img-responsive"></a></li>
                  <li><a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/cuerpo_sonido.png" class="img-responsive"></a></li>
                  <li><a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/cuerpo_tecnologia.png" class="img-responsive"></a></li>
                  <li><a href="#"><img src="<?php bloginfo('template_url'); ?>/danza/images/laboratorio_de_creacion.png" class="img-responsive"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      <?php endif; ?>
      <?php if(is_page("Aula danza")) :?>
        <div class="row" id="div-mod-enc">
          <input type="hidden" value="<?php bloginfo('template_url'); ?>" id="bloginfo">
          <div class="col-lg-1 col-md-1 text-center">
            <img src="<?php bloginfo('template_url'); ?>/images/logo_bogota.png">
          </div>
          <div class="col-lg-offset-4 col-lg-2 col-md-offset-4 col-md-2" style="color: #9c474c;">
            <h2 class="tit-enc" style="font-size: 60px;"><strong>DANZA</strong></h2>
          </div>
          <div class="col-lg-offset-4 col-lg-1 col-md-offset-4 col-md-1 text-center">
            <img src="<?php bloginfo('template_url'); ?>/images/logo_crea.png">
          </div>
        </div>
        <div class="row" id="contenedor-aula-danza">
          <div class="div-video" style="overflow: auto;">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 text-left">
              <a href="" style="color: #591508;">SELECCIONE UN MÓDULO     <i class='fas fa-caret-left'></i></a>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-11 col-lg-8 text-right">
              <h2>MÓDULO 1 - CUERPO MOVIMIENTO</h2>  
              <!-- <div class="embed-responsive embed-responsive-16by9"> -->
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Ttg8-K0hOnU" frameborder="0" width="480" height="320" allowfullscreen></iframe>
                <!-- </div> -->
              </div>
            </div>
            <div class="div-modulos">
              <div class="col-xs-6 col-sm-offset-2 col-sm-3 col-md-offset-0 col-md-1-5 col-lg-offset-1 col-lg-2">
                <a href="#"><center><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_reconocimiento_corporal.png" id="img_mod_reconocimiento" class="img-responsive"></center></a>
              </div>
              <div class="col-xs-6 col-sm-offset-2 col-sm-3 col-md-offset-0 col-md-1-5 col-lg-offset-0 col-lg-2">
                <a href="#"><center><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_movimientos_universales.png" id="img_mod_movimientos" class="img-responsive"></center></a>
              </div>
              <div class="col-xs-4 col-sm-4 col-md-1-5 col-lg-2">
                <a href="#"><center><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_equilibrio_puntos_de_apoyo.png" id="img_mod_equilibrio" class="img-responsive"></center></a>
              </div>
              <div class="col-xs-4 col-sm-4 col-md-1-5 col-lg-2">
                <a href="#"><center><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_giros_y_saltos.png" id="img_mod_giros" class="img-responsive"></center></a>
              </div>
              <div class="col-xs-4 col-sm-4 col-md-1-5 col-lg-2">
                <a href="#"><center><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_direcciones_y_desplazamientos.png" id="img_mod_direcciones" class="img-responsive"></center></a>
              </div>        
            </div>
            <div class="div-con-mod" style="display: none;">
              <div class="div-btn-mod col-lg-3 col-md-4 col-sm-4" style="height: 750px;">
                <div style="margin-top: 60%;">
                  <div class='row'>
                    <div class="col-lg-1 col-md-1 col-sm-1">  
                      <i class="fas fa-2x fa-caret-right flecha" id="flecha-reconocimiento"></i>
                    </div>
                    <div class="col-lg-9 col-md-10 col-sm-10">
                      <button class='btn btn-block btn-unsel' id="btn-reconocimiento">Reconocimiento Corporal</button>
                    </div>
                  </div>
                  <div class='row'>
                    <div class="col-lg-1 col-md-1 col-sm-1">
                      <i class="fas fa-2x fa-caret-right flecha" id="flecha-movimientos"></i>
                    </div>
                    <div class="col-lg-9 col-md-10 col-sm-10">
                      <button class='btn btn-block btn-unsel' id="btn-movimientos">Movimientos Universales</button>
                    </div>
                  </div>
                  <div class='row'>
                    <div class="col-lg-1 col-md-1 col-sm-1">
                     <i class="fas fa-2x fa-caret-right flecha" id="flecha-equilibrio"></i>
                   </div>
                   <div class="col-lg-9 col-md-10 col-sm-10">
                    <button class='btn btn-block btn-unsel' id="btn-equilibrio">Equilibrio Puntos de Apoyo</button>
                  </div>
                </div>
                <div class='row'>
                  <div class="col-lg-1 col-md-1 col-sm-1">
                    <i class="fas fa-2x fa-caret-right flecha" id="flecha-giros"></i>
                  </div>
                  <div class="col-lg-9 col-md-10 col-sm-10">
                    <button class='btn btn-block btn-unsel' id="btn-giros">Giros y Saltos</button>
                  </div>
                </div>
                <div class='row'>
                  <div class="col-lg-1 col-md-1 col-sm-1">
                    <i class="fas fa-2x fa-caret-right flecha" id="flecha-direcciones"></i>
                  </div>
                  <div class="col-lg-9 col-md-10 col-sm-10">
                    <button class='btn btn-block btn-unsel' id="btn-direcciones">Direcciones y Desplazamientos</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="row col-lg-offset-1 col-lg-8 col-md-offset-1 col-md-7 col-sm-offset-1 col-sm-7">
              <div class="div-muneca">
                <img src="" class="img-responsive muneca" style="height: 230px;">
              </div>
              <div id="mod-reconocimiento" style="display: none;">
                <h2 class="tit-rec" style="padding-bottom: 30px;">RECONOCIMIENTO CORPORAL</h2>
                <div class="row">
                  <div class="div-con-rec-uno col-lg-6 col-md-6 col-sm-12">      
                    <button class='btn btn-block btn-sel center-block' id="btn-rompecabezas-rec">Rompezabezas</button>
                  </div>
                  <div class="div-con-rec-dos col-lg-6 col-md-6 col-sm-12">      
                    <button class='btn btn-block btn-sel center-block' id="btn-video-rec">Video</button>
                  </div>
                  <div class="div-act-rom-rec text-center" style="display: none;">
                    <iframe src="https://h5p.org/h5p/embed/303384" width="800" height="600" frameborder="0" allowfullscreen="allowfullscreen"></iframe><!-- <script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script> -->
                  </div>
                  <div class="div-act-vid-rec text-center" style="display: none;">
                    <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/artq-ZfapzY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->
                  </div>
                </div>
              </div>

              <div id="mod-movimientos" style="display: none;">
                <h2 class="tit-mov" style="padding-bottom: 40px;">MOVIMIENTOS UNIVERSALES</h2>
                <div class="row">
                  <div class="div-con-mov-mod-uno col-lg-6 col-md-12" style="">
                    <p>La danza o el baile es un arte donde se utiliza el movimiento del cuerpo usualmente con música, como una forma de expresión y de interacción social, con fines de entretenimiento, artisticos o religiosos. Es el movimiento en el espacio que se realiza con una parte o todo el cuerpo del ejecutante, con cierto compás o ritmo como expresión de sentimientos individuales, o de símbolos de la cultura y la sociedad. <br><br>En este sentido, la danza también es una forma de comunicación, ya que se usa el lenguaje no verbal entre los seres humanos, donde el bailarín o bailarina expresa sentimientos y emociones a través de sus movimientos y gestos. Se realiza mayormente con música, ya sea una canción, pieza musical o sonidos. <br><br>La danza o el baile es un arte donde se utiliza el movimiento del cuerpo usualmente con música, como una forma de expresión y de interacción social, con fines de entretenimiento, artisticos o religiosos.<br><br>Es el movimiento en el espacio que se realiza con una parte o todo el cuerpo del ejecutante, con cierto compás o ritmo como expresión de sentimientos individuales, o de simbolos de la cultura y la sociedad.</p>
                  </div>
                  <div class="div-con-mov-mod-dos col-lg-6 col-md-12" style="">
                    <img src="<?php bloginfo('template_url'); ?>/danza/images/movimientos_cuerpo.png" class="img-responsive" width="480px">
                    <p>La danza y sus diferentes géneros se conectan directamente casi con todos los movimientos los cuales son llamados universales en este módulo, ya que se convierte en las técnicas para expresar por medio del baile la interacción de diversos elementos los cuales son llamados por nombres como Plie Releve, Cambre o Flex.</p>
                    <div class="col-lg-6">
                      <button class="btn btn-block btn-sel">Juega</button>
                    </div>
                    <div class="col-lg-6">
                      <button class="btn btn-block btn-sel" data-toggle="modal" data-target="#modal-video-movimientos">Video</button>
                    </div>
                  </div>
                </div>
              </div>

              <div id="mod-equilibrio" style="display: none;">
                <h2 class="tit-equi" style="padding-bottom: 40px;">EQUILIBRIO PUNTOS DE APOYO</h2>
                <div class="row">
                  <div class="div-con-equi-uno col-lg-6 col-md-12">
                    <p>Los puntos de apoyo o también llamados puntos de equilibrio, son esas partes del cuerpo que están sobre una superficie fija (como el suelo) y a partir de los cuales se puede apoyar el resto del cuerpo ya sea para generar una posición estática como una parada de manos, o una posición que luego se mueva como un giro.</p>
                  </div>
                  <div class="div-con-equi-dos col-lg-offset-1 col-lg-4 col-md-12">
                    <button class='btn btn-block btn-sel'>Juega</button>
                    <button class='btn btn-block btn-sel'>Video</button>
                  </div>
                </div>
              </div>

              <div id="mod-giros" style="display: none;">
                <h2 class="tit-gir" style="padding-bottom: 40px;">GIROS Y SALTOS</h2>
                <div class="row">
                  <div class="div-con-gir-uno col-lg-6 col-md-12">
                    <p>En la danza se manejan diferentes géneros musicales y técnicas las cuales dan un punto de partida para conocer de fondo el modo en que se realizan cada uno de los pasos, saltos o giros. Es de importancia resaltar cómo cada danza tiene complementos importantes tales como el vestuario, maquillaje, puesta en escena y música.<br><br>Dentro de todo lo que une a la danza, la técnica en diferentes pasos como los giros y saltos cambia dependiendo del género que se vaya a trabajar; para girar existen diferentes etapas las cuales el bailarín debe seguir:<br>
                      <ul>
                        <li>Equilibrio estático: El cual se realiza antes de comenzar el giro.</li>
                        <li>Equilibrio dinámico: Se realiza en el momento que ya se está ejecutando el giro y sirve para mantenerse en un punto o seguir un recorrido, entender y manejar estos principios ayuda a prevenir el mareo.</li>
                        <li>Velocidad de giro: El cual depende del ritmo y la energía puesta.</li>
                      </ul><br>Existen varias técnicas para realizar giros los cuales se conectan directamente con la tradición de cada baile, por ejemplo en la danza Sufí se realizan giros los cuales se conectan con Dios y son completamente místicos y su técnica se basa en girar sobre el propio eje muchas veces y a velocidad, este es “...un baile relacionado directamente con el movimiento giratorio de los planetas y la conexión con Dios, los derviches enlazan un giro tras otro en un espectáculo muy popular  hoy en día en El Cairo, que aúna el misticismo y el folclor”. (El confidencial, 2009)<br><br>En el flamenco existen clasificaciones para realizar un giro los cuales manejan una técnica propia, para girar es indispensable saber que la cabeza es el último elemento en llegar al punto de donde se partió; veremos todos los giros los cuales hacen parte de este género. Giros en el punto de apoyo, giros en el eje longitudinal, giros fuera del eje vertical, giros sobre un punto de apoyo, giros sobre el punto de apoyo alterno y giros combinados.<br><br>Otro género en donde los giros son un punto importante son las danzas orientales, la técnica varía dependiendo lo que se quiera proyectar en el escenario. “... juntar las manos mientras se va girando y luego abrirlas con gracia y elegancia para hacer una postura básica y luego sí la ondulación. Para esta última se hace un ocho vertical con la cadera y se repite el giro”. ( La danza de la vida, 2016).<br><br>En conclusión los giros se determinan dependiendo el género musical, aunque todos se unan entre sí y se logre llegar una aproximación para cumplir con las técnicas establecidas desde el ballet.
                    </p>
                  </div>
                  <div class="div-con-gir-dos col-lg-offset-1 col-lg-4 col-md-12"> <!-- style="height: 500px; align-items: center; display: flex;" -->
                    <button class='btn btn-block btn-sel'>Cualidades físicas</button>
                    <button class='btn btn-block btn-sel'>Video</button>
                  </div>
                </div>
              </div>

              <div id="mod-direcciones" style="display: none;">
                <h2 class="tit-dir" style="padding-bottom: 40px;">DIRECCIONES Y DESPLAZAMIENTOS</h2>
                <div class="row">
                  <div class="div-con-dir-mod-uno col-lg-6 col-md-12" style="">
                    <p>La danza o el baile es un arte donde se utiliza el movimiento del cuerpo usualmente con música, como una forma de expresión y de interacción social, con fines de entretenimiento, artisticos o religiosos. Es el movimiento en el espacio que se realiza con una parte o todo el cuerpo del ejecutante, con cierto compás o ritmo como expresión de sentimientos individuales, o de símbolos de la cultura y la sociedad. <br><br>En este sentido, la danza también es una forma de comunicación, ya que se usa el lenguaje no verbal entre los seres humanos, donde el bailarín o bailarina expresa sentimientos y emociones a través de sus movimientos y gestos. Se realiza mayormente con música, ya sea una canción, pieza musical o sonidos. <br><br>La danza o el baile es un arte donde se utiliza el movimiento del cuerpo usualmente con música, como una forma de expresión y de interacción social, con fines de entretenimiento, artisticos o religiosos.<br><br>Es el movimiento en el espacio que se realiza con una parte o todo el cuerpo del ejecutante, con cierto compás o ritmo como expresión de sentimientos individuales, o de simbolos de la cultura y la sociedad.</p>
                  </div>
                  <div class="div-con-dir-mod-dos col-lg-6 col-md-12" style="">
                    <img src="<?php bloginfo('template_url'); ?>/danza/images/movimientos_cuerpo.png" class="img-responsive" width="480px">
                    <p>La danza y sus diferentes géneros se conectan directamente casi con todos los movimientos los cuales son llamados universales en este módulo, ya que se convierte en las técnicas para expresar por medio del baile la interacción de diversos elementos los cuales son llamados por nombres como Plie Releve, Cambre o Flex.</p>
                    <div class="col-lg-12">
                      <button class="btn btn-block btn-sel">Video interactivo</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Inicio del modal video movimientos -->
          <div id="modal-video-movimientos" class="modal modal-wide fade">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  <h4 class="modal-title"></h4>
                </div>
                <div class="modal-body">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/artq-ZfapzY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                <div class="modal-footer">
                  <input type="button" class="btn btn-success" data-dismiss="modal" value="Ok"/>
                </div>
              </div>
            </div>
          </div>
          <!--Fin del modal-->
        </div>
      <?php endif; ?>
      <?php the_content(); ?>
    <?php endwhile; endif; ?>

  </div>
  <!--fin contenido -->
  <?php get_footer(); ?>
