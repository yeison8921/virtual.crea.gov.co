<?php ?>
<div class="row" id="footer">
	<div class="col-lg-offset-1 col-lg-3 col-md-4 text-left col-sm-6">
		<h3 class="color-green-footer">Áreas artísticas</h3>
		<?php wp_nav_menu(array(
			'container' => 'div',
			'items_wrap' => '<ul>%3$s</ul>',
			'theme_location' => 'footer'
		)); ?>
	</div>
	<div class="col-lg-4 col-md-4 hidden-sm text-center">
		<img src="<?php bloginfo('template_url'); ?>/index/Logo_alcaldía.png" class="img-responsive">
		<p>Instituto Distrital de las Artes - IDARTES</p>
	</div>
	<div class="col-lg-3 col-md-4 col-sm-6 text-right">
		<h3 class="color-green-footer">Nosotros</h3>
		<?php wp_nav_menu(array(
			'container' => 'div',
			'items_wrap' => '<ul>%3$s</ul>',
			'theme_location' => 'nosotros'
		)); ?>
		<address class="color-green-footer">
			Dirección: Carrera 8 # 15 - 46<br>
			Teléfono: (571) - 3795750<br>
			Email: <a href="mailto:#">contactenos@idartes.gov.co</a>
		</address>
	</div>
</div>
</div>
<?php wp_footer(); ?>

</body>
</html>
