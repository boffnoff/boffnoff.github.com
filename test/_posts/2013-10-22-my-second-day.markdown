---
layout: post
title:  "Second Day"
date:   2013-10-22 13:16:53
categories: work experience davetayls 
---
#Day 2 inside of the Matrix
It's already 11:30am, gee time flies by when you're having fun! So far today I have delved a little deeper into CSS, added anchor 
links to the days and am just about to add a HTML JavaScript widget into the page.

First of all though, this new fandagled CSS I have started. Well it's nothing special like changing the colour of the page. (I think I
have done that enough for now!) Does it allow you to press a button and magically all of the chores are done? No. But it does mean that I can
display code on the website without it screwing up and actually executing the command. I will now have to use the code to show you the code.
I hope that makes sense. Only it would if it would let me. It doesn't so, here's an image instead. 


![Pre Code](/images/pre_code.png)

{% highlight ruby %}
     <pre><code>h1 { background: red; }</code></pre>
{% endhighlight %}

But it is actually do-able, I only realised this later. If you want the "pre code" command to show up, whilst using it, you must encode it using a
HTML Entities webiste. Here's the one I used. SO. In order to display the actual code, I must encode the encoded text again!!! HEADACHES!!!!!! It's
a paradox! Or Inception, whichever floats your boat. Anyway, here's what the above code looks like inside of the "pre code" command. 

{% highlight ruby %}
     &lt;pre&gt;&lt;code&gt;h1 { background: red; }&lt;/code&gt;&lt;/pre&gt;
{% endhighlight %}

Another thing I have maaged to finally get around to doing is inserting anchors for the days, that code goes something along the line of this: 

{% highlight ruby %}
    <a id="monday"></a>
{% endhighlight %}

#Moving up in the world of server files
And not long afterwards Dave showed me how to understand and impliment the "Templating" idea and way of structuring the filesystems. It involved
creating a new directory called "_layouts" and creating a new file called "master.html" within it. The details within that file currently 
As of 4:12pm, 22/10/13) are: 

{% highlight ruby %}
    <html>
    <head>
    <link rel="stylesheet" type="text/css" href="/index.css">
    <meta name="viewport" content="width=device-width;">  
    </head>

    <body>
    <h1>My Blog</h1>
    <a href="/about.html">About Me</a>
    <a href="/index.html">Home</a>
    <hr/>

    </body>

    </html>

{% endhighlight %}




