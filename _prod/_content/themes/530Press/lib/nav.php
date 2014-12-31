<?php

/**
 * @author Spencer Baynton
 * @uses Walker_Nav_Menu
 * @version 1.0.0
 */
class Roots_Nav_Walker extends Walker_Nav_Menu {

  function start_lvl( &$output, $depth = 0, $args = array() ) {

    $output .= '<ul class="dropdown__menu" role="menu">';

  }

  function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {

    if ( in_array( 'menu-item-has-children', $item->classes ) ) {
      $item->classes[] = 'dropdown';
    }

    $item->classes = apply_filters( 'nav_menu_css_class', array_filter( $item->classes ), $item, $args );
    $class = $item->classes ? ' class="' . esc_attr( join( ' ', $item->classes ) ) . '"' : '';

    $id = apply_filters( 'nav_menu_item_id', 'menu-item-'. $item->ID, $item, $args );
    $id = $id ? ' id="' . esc_attr( $id ) . '"' : '';

    $output .= '<li' . $class . $id . ' role="presentation">';

    if ( ! in_array( 'divider', $item->classes ) ) {

      $item_output = $args->before;

      if ( ! in_array( 'dropdown-header', $item->classes ) ) {

        $item_output .= '<a';

        if ( in_array( 'dropdown', $item->classes ) ) {
          $item_output .= ' class="dropdown__toggle link" data-toggle="dropdown"';
        } else {
          $item_output .= ' class="link"';
        }

        $attributes = array();
        $attributes['href']   = $item->url;
        $attributes['rel']    = $item->xfn;
        $attributes['target'] = $item->target;
        $attributes['title']  = $item->attr_title;
        $attributes['role']   = 'menuitem';
        $attributes = apply_filters( 'nav_menu_link_attributes', $attributes, $item, $args );

        foreach ( $attributes as $attribute => $value ) {
          if ( ! empty( $value ) ) {
            $value = ( 'href' === $attribute ) ? esc_url( $value ) : esc_attr( $value );
            $item_output .= ' ' . $attribute . '="' . $value . '"';
          }
        }

        $item_output .= '>';
        $item_output .= $args->link_before;


      }

      $item_output .= apply_filters( 'the_title', $item->title, $item->ID );

      // Pull description from WP menu
      // if ( $item->description ) {
      //   $item_output .= '<br><div class="nav__desc">' . $item->description . '</div>';
      // }

      if ( ! in_array( 'dropdown-header', $item->classes ) ) {

        // Caret for dropdown or just use after pseudo
        // if ( in_array( 'dropdown', $item->classes ) ) {
        //   $item_output .= ' <span class="dropdown__caret"></span>';
        // }

        $item_output .= $args->link_after;
        $item_output .= '</a>';

      }

      $item_output .= $args->after;

    }

    $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );

  }

}

/**
 * Remove the id="" on nav menu items
 * Return 'menu-slug' for nav menu classes
 */
function roots_nav_menu_css_class($classes, $item) {
  $slug = sanitize_title($item->title);
  $classes = preg_replace('/(current(-menu-|[-_]page[-_])(item|parent|ancestor))/', 'is-active', $classes);
  $classes = preg_replace('/^((menu|page)[-_\w+]+)+/', '', $classes);
  if ($item->menu_item_parent != 0 ) {
    $classes[] = 'nav__sub-item--' . $slug;;
  } else {
    $classes[] = 'nav__item--' . $slug;;
  }
  $classes = array_unique($classes);
  return array_filter($classes, 'is_element_empty');
}
add_filter('nav_menu_css_class', 'roots_nav_menu_css_class', 10, 2);
add_filter('nav_menu_item_id', '__return_null');

/**
 * Clean up wp_nav_menu_args
 *
 * Remove the container
 * Use Roots_Nav_Walker() by default
 */
function roots_nav_menu_args($args = '') {
  $roots_nav_menu_args = array();
  $roots_nav_menu_args['container'] = false;
  if (!$args['items_wrap']) {
    $roots_nav_menu_args['items_wrap'] = '<ul class="%2$s">%3$s</ul>';
  }
  if (!$args['depth']) {
    $roots_nav_menu_args['depth'] = 3;
  }
  return array_merge($args, $roots_nav_menu_args);
}
add_filter('wp_nav_menu_args', 'roots_nav_menu_args');

/**
 * Custom class name for <a> tag
 *
 */
// function add_menuclass($output) {
//    $output= preg_replace('/<a/', '<a class="nav__link"', $output, -1);
//    return $output;
// }
// add_filter('wp_nav_menu','add_menuclass');

/**
 * Custom class name for <li> tags
 *
 */
function add_listclass($classes, $item, $args) {
  if ($item->menu_item_parent != 0 ) {
    $classes[] = 'nav__sub-item';
  } else {
    $classes[] = 'nav__item';
  }
  return $classes;
}
add_filter('nav_menu_css_class', 'add_listclass', 1, 3);



?>