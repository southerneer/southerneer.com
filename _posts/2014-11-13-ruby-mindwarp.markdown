---
layout: post
title: Ruby Mindwarp
date: 2014-11-13
type: post
published: false
---

I may have been a bit too ambitious with the schedule in my [last post]({% post_url 2014-11-11-syllabus %}). It's been a while since the last time I devoted meaningful time and effort into learning a brand new programming language and I forgot just how difficult it is. There are commonalities shared by virtually all modern programming languages (data structures, loops, functions, etc), but it's the peculiarities of each language that can take lots of time to get used to. Ruby is a scripting language which makes it very flexible and expressive (and thus popular) and it's taking a great deal of mental effort for me to bend my dusty C#-, Java-, and PHP-influenced mind to figure out Ruby. Heavy experience with Javascript is certainly, but code blocks like the following require marination:


	{% highlight ruby %}

	class Array
	def find
		each do | value | 
			return value if yield(value)
		end
		nil
	end
end

[1, 3, 5, 7, 9].find {| v | v* v > 30 } 		# = > 7

	{% endhighlight %}

<span style='font-size:0.8em;'>&lt;meta&gt;Jekyll's automatic code indentation is bothering me</meta></span>

What the hell is going on here?! I'm familiar with passing around anonymous functions in Javascript as a way of doing asynchronous operations. This kind of reminds me of that, except that this looks a function call (find) that passes an anonymous function to a 