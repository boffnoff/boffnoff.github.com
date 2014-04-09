/**
* Created with boffnoff.github.com.
* User: boffnoff21
* Date: 2014-04-09
* Time: 01:40 PM
* To change this template use Tools | Templates.
*/


window.onload = initLinks;

var myPix = new Array("/gallery/badge_on_the_edge_poster.png","/gallery/double_or_die_cover.png",
                             "/gallery/line_&_scribble.png","/gallery/on_the_edge_film_festival_poster.png");
var thisPic = 0;

function initLinks() {
    document.getElementById("prevLink").onclick = processPrevious;
    document.getElementbyId("nextLink").onclick = processNext;
}

function