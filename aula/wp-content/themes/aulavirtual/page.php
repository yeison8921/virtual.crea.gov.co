<?php get_header(); ?>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <?php if(is_page("Introducción aula música")) :?>
    <input type="hidden" id="blog-info" value="<?php bloginfo('url'); ?>">
    <input type="hidden" id="bloginfo" value="<?php bloginfo('template_url'); ?>">
    <div class="row contenedor" id="div-cim">
      <div class="text-center header-musica">Aula de música</div>
      <div class="navegacion-musica">
        <div class="col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2 col-sm-offset-1 col-sm-2">
          <button class="btn btn-block btn-n-mus" id="btn-regresar" data-atras="index"><i class="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;Atrás</button>
        </div>
        <div class="col-lg-offset-6 col-lg-2 col-md-offset-6 col-md-2 col-sm-offset-6 col-sm-2">
          <button class="btn btn-block btn-n-mus" id="btn-iniciar">Iniciar&nbsp;&nbsp;<i class="fas fa-long-arrow-alt-right"></i></button>
        </div>
      </div>
      <div>
        <div class="col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-4 col-sm-offset-2 col-sm-8 text-right">
          <div>
            <p class="titulo-index-musica">
              <span class="span-titulo">SALONES</span>
              <span class="span-titulo">INTERACTIVOS</span>
              <span class="span-titulo">DE MÚSICA</span>
            </p>
          </div>
          <div>
            <button class="btn btn-block btn-n-mus" id="btn-introduccion">Introducción</button>
            <button class="btn btn-block btn-n-mus" id="btn-objetivos">Objetivos</button>
            <button class="btn btn-block btn-n-mus" id="btn-metodologia">Metodología</button>
            <button class="btn btn-block btn-n-mus" id="btn-publico">Nuestro público</button>
            <button class="btn btn-block btn-n-mus" id="btn-creditos">Créditos</button>
          </div>
        </div>
        <div class="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-offset-2 col-sm-8 contenedor-info-basica-musica">
          <div class="mini-contenedor-info-basica-musica">
            <div class="titulo-info-basica-musica"></div>
            <div class="contenido-info-basica-musica"></div>
          </div>
        </div>
      </div>
    </div>
  <?php endif; ?>
  <?php if(is_page("Música")) :?>
    <input type="hidden" id="blog-info" value="<?php bloginfo('url'); ?>">
    <input type="hidden" id="bloginfo" value="<?php bloginfo('template_url'); ?>">
    <div class="row contenedor" id="div-ccm">
      <div class="text-center header-musica">Aula de música</div>
      <div class="navegacion-musica">
        <div class="col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2 col-sm-offset-1 col-sm-2">
          <button class="btn btn-block btn-n-mus" id="btn-regresar" data-atras="introduccion"><i class="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;Atrás</button>
        </div>
      </div>
      <div style="padding-top: 100px;">
        <div class="col-lg-offset-1 col-lg-3 col-md-offset-1 col-md-3 col-sm-4 text-right">
          <div>
            <p class="titulo-curso-musica">
              <span class="span-titulo">SELECCIONA</span>
              <span class="span-titulo">UN MÓDULO</span>
            </p>
          </div>
          <div>
            <button class="btn btn-block btn-n-mus" id="btn-andina">Andina</button>
            <button class="btn btn-block btn-n-mus" id="btn-llanera">Llanero</button>
            <button class="btn btn-block btn-n-mus" id="btn-pacifico">Pacifico</button>
            <button class="btn btn-block btn-n-mus" id="btn-atlantico">Atlántico</button>
            <button class="btn btn-block btn-n-mus" id="btn-carranga">Carranga</button>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 contenedor-info-basica-musica">
          <div class="mini-contenedor-info-basica-musica">
            <div class="titulo-info-basica-musica"></div>
            <div class="contenido-info-basica-musica"></div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-4">
          <div>
            <div>
              <p class="titulo-curso-musica">
                <span class="span-titulo">&nbsp;</span>
                <span class="span-titulo">&nbsp;</span>
              </p>
            </div>
          </div>
          <div>
            <button class="btn btn-block btn-n-mus" id="btn-teorica">Sala teórica</button>
            <button class="btn btn-block btn-n-mus" id="btn-interctiva">Sala interactiva</button>
            <button class="btn btn-block btn-n-mus" id="btn-general">Sala general</button>
          </div>
        </div>
      </div>
    </div>
  <?php endif; ?>
  <?php the_content(); ?>
<?php endwhile; endif; ?>
<?php get_footer(); ?>