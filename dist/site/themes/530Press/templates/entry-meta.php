<time class="published" datetime="<?php echo get_the_time('c'); ?>" itemprop="datePublished" pubdate>
  <?php echo get_the_date(); ?>
</time>
<p class="byline author vcard" itemprop="author" itemscope itemptype="http://schema.org/Person">
  <?php echo __('By', 'roots'); ?> <a href="<?php echo get_author_posts_url(get_the_author_meta('ID')); ?>" rel="author" class="fn" itemprop="name"><?php echo get_the_author(); ?></a>
</p>
