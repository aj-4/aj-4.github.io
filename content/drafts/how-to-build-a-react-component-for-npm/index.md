---
title: How to build and publish a React Component for NPM
description: test
date: "2019-06-23T22:12:03.284Z"
---

When writing a React component recently, I thought...hey, I have written this exact component before.

It was a feedback widget, a simple button that animates into an input, and fires a post request on submit.

Seemed like a good case for an NPM package, so I started to write one. 

And something weird happened.

I wrote code differently. Better, in fact.

If there was even a small chance someone else would use this package, I'd want them to have a pleasant experience, because this package would be tied back to me.

And then I realized, I should write packages more often. Maybe even whenever possible. 

And maybe you should too, so here's a short guide on how to start creating your own NPM packages.

** should be a gif of the feedback widget in action**

> As a user, I want to leave feedback for a site that's almost perfect, minus one feature

> As a product owner, I want a direct channel for customers to express their needs or problems

For custom components that are commonly used (for example, a feedback box) well that's a practically infinite space to create shareable modules. 

I'm sure you can think of a few just off the top of your head. 

Writing a component package, with NPM in mind, also forces us to write better code (since we may not be the only one using it).

So let's dive in. And here's a short video if you would prefer (text continues below)

Let's make a directory and install the minimal set of dependencies.

```
mkdir feedbk-client
cd feedbk-client
npm init -y
npm i react react-dom webpack babel
```

we'll use a pretty standard webpack config

`gist:weirdpattern/ce54fdb1e5621b5966e146026995b974#syntax.text`

Let's use [Material UI](http://material-ui.com) for atomic components, as building blocks. We'll use these in our widget to ensure that clean, consistent style.

```

```