# 530 Starter Workflow : HTML, SCSS, WP


## Introduction

530's modified version of Skyline helps you create a design system for your website.  It encourages a well thought-out CSS architecture, and enables you to develop a reusable and maintainable codebase.

This starter kit includes the style files you will use on your site. In most cases, you will copy the contents of the `css` folder into your own project. Each SCSS partial is self-documented and includes markup examples in the comments. Whenever a new partial is added make sure to use the same documentation style to keep the project consistent. The kit also contains HTML files as examples to illustrate how you will write out your markup.

530's Skyline is a minimal scaffolding, it does not impose a visual style.  It contains many layout and structural helpers, utilities, and basic element and module styles that you will build upon. This kit helps to streamline frontend processes with various grunt task. It's a static frontend-first workflow that allows for developers to easily piece together 'pieces' or 'modules' in a static development environment. It also allows for on the fly frontend changes or development in a non-static environment - in our case Wordpress. Frontend development should only take place within the `src` directory. All assets are compiled and concatenated into `dist` when working in the `src` directory.

Use the `index.html` file as a starting point for static development then prefix the rest of your pages with 'page-'. `**example:** page-about.html`

You can reference the example files or documentation to clarify proper BEM/SCSS, JS hooks, and Grid/Layout usage.

An HTML file is also provided in `lib/css/sass-docs/` that documents all SCSS variable, function, and mixin usage. Please document any additional mixins added using the same format.

## Guidelines

#### CSS / SCSS
This kit uses [BEM](http://bem.info/method/) syntax and [OOCSS](http://oocss.org/) patterns. Following these as closely as possible, along with good documentation, will lead to an organzied, and maintainable codebase.

The `grunt` and `grunt dev` commands compile, prefix, minify, and copy css into both the static development directory and the cms directory

**Class names should communicate _useful_ information to _developers_.** It’s helpful to understand what a specific class name is going to do when you read a DOM snippet, especially in multi-developer teams where front-enders won’t be the only people working with HTML components. If you don’t need to add presentation and behaviour to your web documents, then you probably don’t need classes in your HTML

**Class names impart little or no useful semantic information to machines** or human visitors unless it is part of a small set of agreed upon (and machine readable) names – Microformats.


###### General Styling

* **DO NOT** using ID's.  Use classes instead
* **DO NOT** over-qualify selectors.  Keep specificity number as low as possible
* **DO NOT** (with the exception of pseudo/hover states and module modifier and child classes).
* Use provided `rem` function for margin, padding, width, height, etc.
* Use provided `em` function for font sizes on elemnts
* All CSS class names should use BEM syntax with double underscore and double dash
* Use one discrete, comma separated selector per line in multi-selector rulesets
* Order of CSS properties: Positioning, Display & Box Model, Color, Text, Other
* List @extend(s) first
* List "regular" styles next
* List @include(s) next
* Nest all pseduo-classes directly beneath base properties and values
* Media queries belong right after pseudo-classes
* List any class modifiers after all module children
* Modules are named _{module}.scss
* Be generous with comments & use same comment block style `// -- Comment Text`
* Variablize all colors, numbers, etc.
* Declare ```@extend``` followed by styles then ```@include``` statements at the end of the declaration block whenever possible.
* If a ```:hover``` pseudo class is styled, ```:focus``` should also be styled for accessibility. Focus styles should never be removed

###### SCSS Example
```css
    .module {
        @extend %clearfix;
        margin-top: u(rem(10));
        font-size: em(10px);
        color: red;
        @include mixin;

        /* -- Min Width @ $tablet */
        @include min-breakpoint($tablet) {
            margin-top: u(rem(10)) u(rem(20));
        }

    .module__item {
        display: inline-block;
    }

    .module--alt {
        @extend .module;
        color: green;
    }
```
**Class names are named using adjectives and nouns.**

```css
    /* -- Block Noun */
    .person {}

    /* -- Element Noun__Noun */
    .person__hand{}

    /* -- Modifier Noun_Noun--Adjective */
    .person__hand--left{}
```

###### States
* States are styles that override all other styles.  Usually via javascript.
* States are generally applied to the same element as a layout rule, or to the same element as a base module.
* An example would be a navigation drop down, or a message that displays a success or error state.
* State class names should be written as a boolean.  For example, ```.is-collapsed``` or ```.is-error```.
* When state rules are added to specific modules, the module name should be included in the classname and   prefixed with ```is-```.  For example, an active tab state could be written as ```.is-nav-active```.
* States should be placed at the bottom of the partial thats being changed
* Make sure to document each state
* States can use `!importants` if absolutely necessary

#### JS
Use ID's for JS on unique selectors and classes on repeated elements. Prefix all JS hooks with `js-`.

#### Commenting/Snippets
Throw this snippet in your Emmet Sublime User Settings to enable some quick keyboard shortcuts that are used in this kit.
```json
{
  "snippets": {
    "css": {
      "snippets": {
        "mq-": "// -- Min Width @ ${1:width}\n@media #{${1:width}} {\n|\n}",
        "com": "// -------------------------------------\n//   ${1:Comment Name} \n// -------------------------------------",
        "scom": "// -- ${1:Small Comment}"
      }
    }
  }
}
```

## Starter Files
The starter files contain as little code as possible.  The structure consists of:

```
├── lib
| 	├──css
|  	  	├── base
|	    	├── variables, resets, mixins, global assets like fonts
|    	├── elements
|	      	├── styles for base elements (p, ul, img, form, input, etc.)
|    	├── layout
|    	    ├── grids, widths, utilities, etc.
|    	├── modules
|    	    ├── styles for objects/modules you create (.site-header, .hero, .page, .bio, .site-footer, etc.)
|    	├── README.md (credits and info about Skyline SCSS)
|
|    	├── screen.scss (the manifest file that pulls in all the partials and compiles into screen.css)
|    	├── screen-ie.scss (same as screen.scss but returns pixel values for IE legacy)
|    	├── style.dev.css (compiled css for static development files)
|
|    	├── sass-docs
|	 		├── index file for SCSS mixin, function, & var documentation
|
|	├── img
|   	├── (placeholder images are here for example pages)
|
|	├── js
|   	├── production
|			├── concatenated & minfied scripts, along with all other bower imported plugins
|		├── scripts.js (global scripts - should be used on every page)
|
├── example-forms.html
|
├── example-grids.html
|
├── example-modules.html
|
├── example-index.html
|
├── index.html
|
├── README.md

```

## Usage
run `grunt` to watch files or `grunt dev` to open static index file and watch development files found in `src`


## Documentation
Extensive docs are in the works, but not yet released. However, Skyline makes it easy by adding detailed documentation in the comments of the scss partials themselves. Descriptions are right next to the actual code, making it simple to learn how it works.

