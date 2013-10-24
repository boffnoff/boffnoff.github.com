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
the page. When we say organise, it's not put each hyperlink on a new line, because in HTML that makes no difference because it ignores white space, and anyway the end result was the exact same
as the original. What we did was place the hyperlinks into an unordered list (&lt;ul&gt;) , with each link as a link item (&lt;li&gt;). Then we added CSS code to style and convert the list
to become horizontal and aligned right.
