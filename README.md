## Table of Contents
+ [Quotes](#quotes)
  + [Conventions](#Conventions)
      + [Content](#Content)
      + [Frontmatter](#Frontmatter)
  + [Using plugins](#using-plugins)
    + [Abbreviations](#Abbreviations)

# Quotes

My favourite quotes. Forked from [Gatsby blog starter](https://github.com/gatsbyjs/gatsby-starter-blog).  [Minimo theme](https://themes.gohugo.io//theme/minimo/) for [Hugo](https://gohugo.io/) by [Munif Tanjim](https://github.com/MunifTanjim).

To run locally, follow these steps:

```bash
yarn
yarn start
```
Then open [http://0.0.0.0:8000](http://0.0.0.0:8000).

## Conventions

### Content

1. The quotes are located at `/quotes`.

### Frontmatter

This is how the frontmatter must appear

```markdown
---
author: String!
date: Date(yyyy-mm-dd)!
draft: Boolean!
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