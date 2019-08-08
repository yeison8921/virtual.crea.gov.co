<?php get_header(); ?>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <?php if(is_page("Introducción aula música")) :?>
    <input type="hidden" id="blog-info" value="<?php bloginfo('url'); ?>">
    <input type="hidden" id="bloginfo" value="<?php bloginfo('template_url'); ?>">
    <div class="row" id="div-cim">
      <div class="text-center" id="header-musica">Aula de música</div>
      <div id="navegacion-musica">
        <div class="col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2 col-sm-offset-1 col-sm-2">
          <button class="btn btn-block btn-n-mus" id="btn-regresar"><i class="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;Atrás</button>
        </div>
        <div class="col-lg-offset-6 col-lg-2 col-md-offset-6 col-md-2 col-sm-offset-6 col-sm-2">
          <button class="btn btn-block btn-n-mus" id="btn-iniciar">Iniciar&nbsp;&nbsp;<i class="fas fa-long-arrow-alt-right"></i></button>
        </div>
      </div>
      <div>
        <div class="col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-4 col-sm-offset-2 col-sm-8 text-right">
          <div>
            <p class="titulo-musica">
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
        <div class="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-offset-2 col-sm-8" id="contenedor-info-basica-musica">
          <div id="mini-contenedor-info-basica-musica">
            <div id="titulo-info-basica-musica" style="font-size: 40px;"></div>
            <div id="contenido-info-basica-musica" style="font-size: 20px;"></div>
          </div>
        </div>
      </div>
    </div>
  <?php endif; ?>
  <?php the_content(); ?>
<?php endwhile; endif; ?>
<?php get_footer(); ?>