
<footer class="site-footer" role="contentinfo" itemscope="itemscope" itemtype="http://schema.org/WPFooter">
  <div class="container">
    <a class="branding" href="<?php echo esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a>
    <nav class="site-nav--footer">
      <?php dynamic_sidebar('sidebar-footer'); ?>
    </nav>
    <small class="site-credits">&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?></small>
  </div>
</footer>
