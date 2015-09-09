---
layout: page
title: The Brononymous Hotline
permalink: /brononymous/
published: true
category: portfolio
---

**Partners**: Humanaut, Redwood

**Client**: Organic Valley

**Technology stack**: PHP, [TwitterOAuth](https://twitteroauth.com/), [ReactJS](http://facebook.github.io/react/), [Bootstrap](http://getbootstrap.com/), [Bower](http://bower.io/), [Gulp](http://gulpjs.com/), [SASS](http://sass-lang.com/), [Capistrano](http://capistranorb.com/), [AWS EC2](https://aws.amazon.com/ec2/)

Due to the overwhelming success of the initial [Save the Bros campaign](http://archive.savethebros.com), Organic Valley decided on a reboot and a new version of the savethebros.com site. While the new site would share many styling and front-end features of the old one there was a good bit of trickeration going on behind the scenes and a short timeline (about 2.5 weeks) in which to make it all happen. This was the challenge.

The core concept of the campaign was that site visitors could anonymously "out" their friends as bros and send them a message warning them of their ways. I'll not delve too much into the details here...it's way more fun to just visit the site and watch all the hilarious Youtube clips. My job was to facilitate the communication part of the equation via Twitter and create a seamless loop of user interaction. To achieve maximum virality and exposure while not being overly "spammy" or annoying was the ultimate goal and I think we pulled it off remarkably well.

The nuts and bolts portion of the project was fairly straightforward. I've been gradually building a sleek, efficient HTML craftsman's toolbelt consisting of Bower for front-end package management, Gulp for on-the-fly compiling, minifying, linting, etc. and Capistrano for quick deployment with robust rollback features. Gaining an understanding of these tools has cut my development time way down for these concentrated microsite projects. These tools come with a learning curve but after the initial time cost they really come in handy for getting work done *without regressions*. In past time-crunched projects this has always been the most vexing thing for me...at a certain point the codebase reaches a level of complexity that any new features or fixes almost automatically result in regressions and I get caught in a bug vortex. With these new tools in place I can burn quickly through a new feature, actually see the result in my browser instantly, and tidy up the code in one fell swoop. Before my revelation I was likely to get caught up on a simple javascript or css bug (solved by automatic real-time gulp linting), get tired of constant browser refreshing (solved by browserify in gulp), lose myself in a web of dependencies (solved by bower and wiredep), or some other such nonsense.

