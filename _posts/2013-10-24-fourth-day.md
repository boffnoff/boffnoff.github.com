---
title: My Fourth Day
layout: post
---

## Day 4 is upon us

So the first task ahead of us today is to sort out that pesky "fourth-day.html" file that went AWOL. First task is to clean up index.css, and then to continue working in this new
markdon language. After that I need to add spacing to my headers and style the footers and headers. But since I already have, here's what they look like, firstly the "main_header":

    .main_header {
      padding: 15px;
      border-bottom: solid 3px #00FFFF;
    }


    .page_footer {
      color: silver;
      size: 8px;
    }

As you can see, at least now the website appears a little more professional. The next thing we tackled was a lot more difficult.


## Blocks within Blocks within Blocks

So after I had ran cleanup on my CSS, it was suggested by my Fairy Godfather, (He's training to become "The Godfather"), that we organise the navigation hyperliks that you see at the top of
the page. When we say organise, it's not put each hyperlink on a new line, because in HTML that makes no difference because it ignores white space, and anyway the end result was the exact
same as the original. What we did was place the hyperlinks into an unordered list `<ul>` , with each link as a link item `<li>`. Then we added CSS code to style and convert the list
to become horizontal and aligned right. It's probably easier if you just take a look at what the code used to look like, and what it looks like now:

### Then

    <body>
      <header class="main_header">
      <h1>{{page.title}}</h1>
      <a href="/index.html">Home</a>
      <a href="/about.html">About Me</a>
      <a href="https://github.com/boffnoff">GitHub</a>
      <a href="https://twitter.com/Boffnoff">Follow me on Twitter</a>
      <a href="http://store.steampowered.com">Check out Steam</a>
    </header>

### Now

    <body>
      <header class="main_header">
        <h1>{{ page.title }}</h1>
        <ul class="menu-horizontal">
          <li><a href="/index.html">Home</a></li>
          <li><a href="/about.html">About Me</a></li>
          <li><a href="https://github.com/boffnoff">GitHub</a></li>
          <li><a href="https://twitter.com/Boffnoff">Follow me on Twitter</a></li>
          <li><a href="http://store.steampowered.com">Check out Steam</a></li>
        </ul>
      </header>


The next task was to add rules and attribrutes to elements within index.css. The website has started to feel and look a lot better. We then added in code to display when the website was
last was updated/built:

     <footer class="page_footer">
        Generated: {{ site.time | date: '%d %m %H:%M' }}
      </footer>

The codes after `| date:` we grabbed from a website that showed all of the possible Jekll date output codes. You can use any from the extensive
[list.](http://docs.shopify.com/themes/liquid-basics/output#date)We decided upon: day, month, time. You wil probably notice that the time displayed isn't your system time. Still don't know
why, but I think it has something to do with the fact that the website is hosted on GitHub, so their server might be in a different time zone.


##Brand Test

So then I was introduced to something called a "brand-test". This file is stored within the root of the server, and bascicaly uses any styling you have already applied and gives you
examples of every type of HTML code available, and when viewed shows you the holes within you CSS code. I spent 10 minutes patching up holes that were easily solved by adding a `h1` to a
list somewhere. A good thing that I learnt was that if you add a base color into the body section, then any text within your page will show up. If you would like custom, embedded fonts to
appear then you must include and reference them like so:

    <head>
        <title>Brand - Test</title>
        <link href="index.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" type="text/css" href="fonts/quicksand/stylesheet.css">
        <link rel="stylesheet" type="text/css" href="index.css">
        <meta name="viewport" content="width=device-width;">  
    </head>

If you have them linked elsewhere, and not contained within the `body` tags they won't work. And the next task is change/add code for the links between pages. <br><br><br>
  ![Page Navigation](/images/page_navigation.png)
  
  
  
As thats what it looks like now, but when you view the pages now, it will have changed since the writing of this. 


###New CSS rule for page navigation

    .paging_previous {
      text-align: right;
    }


    .pagig_next {
      text-align: left;
    }
    
    .paging {
    overflow: hidden;
    }

No that I had finally got that sorted out, I turned my attention a new page, "misc.html". But have reached a stump as I cannot provide myself with the code required to create a slideshow
of my Graphics work, even web based pages that create it for you aren't working. So instead me and Dave sat down and had a look through his work for a bug that he had been looking for, for
ages. We found it, and then we turned our attention to one that had been "bugging" me for ages. It turned out that it was a simple typeo in the address of a link! A silly mistake, that was
preventing some aspects of my CSS to show through onto the page.