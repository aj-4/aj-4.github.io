---
title: How to build and publish a React Component for NPM
date: "2019-06-23T22:12:03.284Z"
---

Let's build a widget that anyone can add to their site, which allows users to leave feedback, suggestions, or bug reports. Something like this:

![Chinese Salty Egg](./salty_egg.jpg)
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

<script src="https://gist.github.com/BrodaNoel/4be6cc536525f65b033f007096c482be.js"></script>

`gist:weirdpattern/ce54fdb1e5621b5966e146026995b974#syntax.text`

Let's use [Material UI](http://material-ui.com) for atomic components, as building blocks. We'll use these in our widget to ensure that clean, consistent style.

```

```