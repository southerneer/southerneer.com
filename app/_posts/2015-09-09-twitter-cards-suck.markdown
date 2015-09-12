---
layout: post
title: Twitter Cards Suck
date: 2015-09-09
type: post
published: false
comments: true
---

Twitter Cards are a great idea in theory, but the execution is pretty terrible in this humble developer's opinion. I was forced to dive way deep into the minutiae for my recent [Brononymous Hotline microsite project](/brononymous/). First, your site needs to be whitelisted by Twitter. This makes sense, 


<strong>&lt;Developer speak&gt;</strong>

The nuts and bolts portion of the project was fairly straightforward. I've been gradually building a sleek, efficient HTML craftsman's toolbelt consisting of Bower for front-end package management, Gulp for on-the-fly compiling, minifying, linting, etc. and Capistrano for quick deployment with robust rollback features. Gaining an understanding of these tools has cut my development time way down for these concentrated microsite projects. These tools come with a learning curve but after the initial time cost they really come in handy for getting work done *without regressions*. In past time-crunched projects this has always been the most vexing thing for me...at a certain point the codebase reaches a level of complexity that any new features or fixes almost automatically result in regressions and I get caught in a bug vortex. With these new tools in place I can burn quickly through a new feature, actually see the result in my browser instantly, and tidy up the code in one fell swoop. Before my revelation I was likely to get caught up on a simple javascript or css bug (solved by automatic real-time gulp linting), get tired of constant browser refreshing (solved by browserify in gulp), lose myself in a web of dependencies (solved by bower and wiredep), or some other such nonsense.

<strong>&lt;/Developer speak&gt;</strong>