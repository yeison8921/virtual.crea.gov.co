<?php get_header(); ?>

      <!--Inicio Contenido -->
      <div class="container my-5">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <h2><?php the_title(); ?></h2>
        <div class="text-justify">
          <?php if(is_page(Notas)) :?>
            <input type="hidden" id="id_usuario" value="<?php echo (get_current_user_id()); ?>">
            <div id="tabla-notas">
            </div>
          <?php endif; ?>
        <?php the_content(); ?>
        </div>
        <?php endwhile; endif; ?>
      </div>

      <!--fin contenido -->

<?php get_footer(); ?>
