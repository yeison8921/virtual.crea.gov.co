<footer class="footer">
	<div class="container-fluid">
		<div class="col-lg-offset-5 col-lg-7">
			<div class="col-lg-3 col-md-3 col-sm-3">
				<h3><strong>Áreas artísticas</strong></h3>
				<?php wp_nav_menu(array(
					'container' => 'div',
					'items_wrap' => '<ul>%3$s</ul>',
					'theme_location' => 'footer'
				)); ?>
			</div>
			<div class="col-lg-2 col-md-2 col-sm-2">
				<h3><strong>Nosotros</strong></h3>
				<?php wp_nav_menu(array(
					'container' => 'div',
					'items_wrap' => '<ul>%3$s</ul>',
					'theme_location' => 'nosotros'
				)); ?>
			</div>
			<div class="col-lg-7 col-md-7 col-sm-7">
				<address>
				<h3><strong>Contáctanos</strong></h3>
				Dirección: Carrera 8 # 15 - 46<br>
				Teléfono: (571) - 3795750<br>
				Email: <a href="mailto:#">contactenos@idartes.gov.co</a>
				</address>
			</div>
		</div>
		<div class="col-lg-12 col-md-12 col-sm-12 text-right">
			<img src="<?php bloginfo('template_url'); ?>/images/logo-alcaldia-header.png">
		</div>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
