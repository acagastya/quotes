## Table of Contents
+ [Agastya's website](#Agastya's-website)
  + [Conventions](#Conventions)
      + [Code snippets](#Code-snippets)
      + [Tags and categories](#Tags-and-categories)
      + [Content](#Content)
      + [Frontmatter](#Frontmatter)
  + [Using plugins](#using-plugins)
    + [Abbreviations](#Abbreviations)
    + [Embedder](#Embedder)
    + [Feed](#Feed)
    + [Footnotes](#Footnotes)
    + [Image](#Image)
    + [KaTeX](#KaTeX)
    + [MDX](#MDX)
    + [Mermaid: to add flowcharts](#Mermaid-to-add-flowcharts)
    + [PrismJS: to add codeblocks](#PrismJS-to-add-codeblocks)
    + [Twitter embed](#twitter-embed)

# Agastya's website

My personal blog. Forked from [Gatsby blog starter](https://github.com/gatsbyjs/gatsby-starter-blog).  Syntax theme based on [Sarah Drasner's Night Owl](https://github.com/sdras/night-owl-vscode-theme/) with small tweaks.  [Minimo theme](https://themes.gohugo.io//theme/minimo/) for [Hugo](https://gohugo.io/) by [Munif Tanjim](https://github.com/MunifTanjim).

To run locally, follow these steps:

```bash
yarn
yarn start
```
Then open [http://0.0.0.0:8000](http://0.0.0.0:8000).

## Conventions

### Code snippets

In a code snippet of a prompt:
1. `john@doe λ ` represents a non-superuser.
1. `root@doe # ` represents a superuser.
1. If the username is omitted, it represents non-superuser.  Unless otherwise stated, the user does not represent a superuser.

### Tags and categories

Per [Yoast.com](https://yoast.com/tags-and-categories-difference/ "SEO basics: What is the difference between tags and categories?") ([Archived link](http://web.archive.org/web/20200115221505/https://yoast.com/tags-and-categories-difference/))

1. Categories allowed for a broad grouping of post topics.
1. Tags are used to describe your post in more detail.

### Content

1. The blog posts are located at `src/posts`.
1. Images are located at `src/images`.

### Frontmatter

This is how the frontmatter must appear

```markdown
---
categories: Array<String>!
date: Date(yyyy-mm-dd)!
draft: Boolean!
excerpt: String!
lang: String(ISO 639-1)!
path: unique(String!)
tags: Array<String>!
title: String!

---

```

## Using plugins

### Abbreviations

Abbreviations can be added as follows:

```diff
The HTML specification
is maintained by the W3C.

+*[HTML]: Hyper Text Markup Language
+*[W3C]:  World Wide Web Consortium
```

### Embedder

The following services are supported as of January 15, 2020.
1. CodePen
2. CodeSandbox
3. Slides
4. SoundCloud
5. Spotify
6. Streamable
7. Twitter
8. YouTube

To add an embedd, do it as follows:

```md
...

https://codepen.io/team/codepen/pen/PNaGbb

...
```

### Feed

RSS feed is available at `/posts/rss.xml`.

### Footnotes

Footnotes can be added as follows:

```md
This is normal body copy.[^also] It includes a couple footnotes.[^thing]

[^also]:
  This is a footnote.

[^thing]:
  This is another footnote.
```

### Image

Use `.mdx` instead of `.md` for the blogpost.  In the same directory, create `Image.js`.  In the `.mdx` file write the following code.

```diff
+import Image from './Image.js'
+<Image />
```

In `Image.js`, copy the content of `src/components/image.js`

Make the following change:

```diff
...
+placeholderImage: file(relativePath: { eq: "filename.ext" }) {
...
```

Note: The file should be located in `src/images`

### KaTeX

KaTeX can be used as:

```md
$\KaTeX$
```
```md
$$
\alpha^2 + \beta^2 = \omega^2
$$
```

### MDX

In the directory `src/posts`, each post is located in a subdirectory as a `.md` or `.mdx` file.  
`gatsby-plugin-mdx` is configured to support both the file extensions.

### Mermaid: to add flowcharts

Flowcharts can be added using MermaidJS.  See [examples](https://mermaid-js.github.io/mermaid/#/examples) ([Archived link](http://web.archive.org/web/20200114175304/https://mermaid-js.github.io/mermaid/#/))

```diff
+```mermaid
+graph LR
+install[Install Plugin]
+install --> configure[Configure Plugin]
+configure --> draw[Draw Fancy Diagrams]
+```
```

### PrismJS: to add codeblocks

To have syntax highlighting in a code block follow the following method:

```diff
+```language
+const foo = 5;
+const bar = 2;
+```
```

For highlighiting a line:

```diff
+```c{5,7-9}
```

For shell prompt:

```diff
+```bash{promptUser: alice}{promptHost: dev.localhost}
```

For inline:

```diff
+I can highlight `css›.some-class { background-color: red }` with CSS syntax.
```

**Note:** Line number is disabled as of January 15, 2020

### Twitter embed

To embed Tweets, add the tweet link with a blank line at the top and the bottom of the link.  For example:

```md
...

https://twitter.com/devangishere/status/1115831423963947009

...
```