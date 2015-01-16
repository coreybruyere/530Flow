<?php get_template_part('templates/head'); ?>
<body <?php body_class(); ?>>
  <?php include_once("assets/img/svg/svg-defs.svg"); ?>

  <!--[if lt IE 8]>
    <div class="alert alert--warning">
      <?php _e('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.', 'roots'); ?>
    </div>
  <![endif]-->

  <?php
    do_action('get_header');
    get_template_part('templates/header');
  ?>

  <?php $main_class = is_front_page() ? 'site-main--home' : 'site-main'; ?>
  <?php $grid_class = is_front_page() ? 'clearfix' : 'grid-wrap'; ?>

  <div class="site container" role="document">
    <div class="<?php echo $grid_class; ?>">
      <main class="<?php echo $main_class; ?>" role="main" itemprop="mainContentOfPage">
        <?php include roots_template_path(); ?>
      </main><!-- /.main -->
      <?php if (roots_display_sidebar()) : ?>
        <aside class="sidebar" role="complementary" itemscope itemtype="http://schema.org/WPSideBar">
          <?php include roots_sidebar_path(); ?>
        </aside><!-- /.sidebar -->
      <?php endif; ?>
    </div><!-- grid-wrap -->
  </div><!-- container -->

  <?php get_template_part('templates/footer'); ?>

  <?php wp_footer(); ?>

</body>
</html>
