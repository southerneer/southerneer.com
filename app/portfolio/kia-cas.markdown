---
layout: page
title: Kia CAS social media mashup display
permalink: /kia-cas/
published: true
category: portfolio
hero_img: 'portfolio/kia-dev.jpg'
hero_img_alt: 'Deving hard'
---

<div class="embed-responsive embed-responsive-16by9" style='margin: 20px auto 20px;' >
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/8GAv4zoK5n4" allowfullscreen></iframe>
</div>

**Partners**: Humanaut, Redwood

**Client**: Kia

**Technology stack**: Ruby, [Sinatra](http://www.sinatrarb.com/), [Masonry](http://masonry.desandro.com/), social network Ruby APIs

While not exactly a marvel of engineering, this project was fun and challenging. Kia came to us with the need for a cool display for their "social media lounge" setup at the Chicago Auto Show. Inside there were two large flatscreens that they wanted to use to highlight social media chatter around the launch of their new [Kia Trailster](http://www.caranddriver.com/news/kia-trailster-concept-photos-and-info-news_) concept.

At the time I had been thinking a lot about the simple, elegant UI of [Google Keep](http://keep.goole.com), a web and mobile app, and had stumbled across [Masonry](http://masonry.desandro.com/) which made that kind of "blocks fitting into a wall" type of feel really easy to create. When this project came across my desk it seemed like the perfect way to experiment with that look and feel.

That was the fun part. The challenging part was getting everything ready in time for the show...about a week and a half. That's about as hard a deadline as possible. By around noon on February 11th, 2015 when the media crowds started filing in either the app would look good and be ready to go or it wouldn't and be a total failure...yikes!

The idea was to poll Instagram, Twitter, Facebook, Vine, and Tumblr regularly searching for posts with content relevant to Kia and the Trailster and add those posts to a pool which would gradually get added to the screen and filter down every few seconds. I was able to find decent Ruby APIs (official or otherwise) for each of the social media services. Facebook discontinued the ability to programmatically search public posts which unfortunately nixed that from the mix, but the rest were fair game. We eventually decided to eliminate Tumblr too because the content was a little too hard to pin down in terms of appropriateness, length, type, etc in such a short timespan.

What I ended up doing was creating a web app for one. Eventually I want to clean it up for general consumption and set it up as a subdomain of southerneer.com, but again the short timeline moved that idea down in the priority list. Given the simplicity of the app, I needed a fairly bare bones backend. Just a few endpoints that would just turn around and query the various Ruby APIs and return formatted information to the front-end was perfect. This is why I went with [Sinatra](http://www.sinatrarb.com/). Rails would have entailed way too much overhead for this and I didn't feel like writing the basic boilerplate web server stuff from scratch so Sinatra was just what the doctor ordered.

After I dug up the APIs and figured out how to work with Masonry I just needed to combine the two into something that was visually compelling. Humanaut provided some valuable assistance on the design side and we collaborated to come up with something that Kia was ultimately very happy with.

Based on some feedback we got at the event itself I had to scramble to put together a quick filtering interface to weed out any posts with "objectionable" content. While explicit content could be weeded out via API flags, but Kia also wanted to keep the focus on their brand and less on their competitors so we added some manual filtering to the app too.

At the end of the week we were all exhausted from the combination of long hours and high stress of the event. But with a satisfied client it was a good exhaustion and we crashed after a few celebratory drinks on Friday night.

<img src='/assets/images/portfolio/kia-celebration.png' alt='Celebration' style='width:100%; height: auto;' />