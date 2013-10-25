---
title: My Last Day
layout: post
---

## Day 5 already? :(

Somewhow this week has gone way to quickly. I hate the way that time flies by when you're having fun, because this morning for example we spent 2 hours on walking me through JavaScript basics. For
this we used [JSbin](http://jsbin.com/OruSetU/1/edit), and if you type in the following into the JavaScript window:


### We started with basic number calculations:

    function add(a, b){
      return a + b;
    }
    
    console.log('add', add(5, 7));

This will return the result:
<br>
`"add"`
`12`
<br>
Then I moved onto harder maths, such as subtracting, multiplying and dividing.


###"Scope" (Just like "I See You" in Avatar)

In JavaScript there is something called "Scope" which effects how every object, function and variable behaves and reacts to each other. The best I can decipher from this is that, no function can
access another function higher up the "inheritance tree", however an object/function within another object/function is able to access it's "parent" and the data contained within. So in a nut shell
functions can only ever read up the "tree", as it were, in order to grab data. When you talk about a functions "scope" what they are in-affect saying is how many things can it access to withdraw
information from.



###Objects + Object Literals

Now we started to get into the harder, more useful and widely used bits of JavaScript; Objects and their Literals. Speaking as someone, who over 2 hours ago knew pratically nothing of their existence
or structure, I can honestly say that once you get to know them they aren't as bad as they seem. At first look the code below appears to just be a line of rubbish, and in a way it is, but it helped
me to wrap my head around, and (hopefully) understand the deeper mechanics and uses of them. See here, you have a function called "box1". The stuff inside of it is unique to that box, and cannot be
accessed by another function. "box1" contains the (variables) 'var me', and the 'var you'. The "=" sign means that the variable has been assigned that value, for example, here the variable me has been
set to John. In "box2" however the variable has been set to whatever the content of "box1" is, and then to display the result of "me" in the console. This is were the whole idea of "scope" exists. 
"box2" cannot access anything in "box1" because "box1" is a seperate function, and "scope" dictates that you cannot access, steal, read or write to another seperate function. So the result of running
the code within "box1" and "box2" will be "undefined" as it cannot access any data. But "box2" has 2 child objects: "box2Inner" and "box2Other". Both of these boxes' "scope" allows them to access 
their parent object: "box2" and therefore retrieve data from it. However "box2" cannot go down the tree and read information from its children. So this code will throw up errors, or
"variable undefined". 



    function box1(){
      var me = 'John';
      var you = 'Bob';
      return me;
    }
    
    
    function box2(){
      var me = box1();
      console.log(me);
     
      
      function box2Inner(){
        var meinner = 'blah';
        console.log(me);
      }
      function box2Other(){
        console.log(meinner);
      }
      box2Inner();
      box2Other();
    }
    
    box2();

###Next

We used to functions to do basically the same thing, here, the `function callback(me, last){ console.log(me, +last);}` if ran on it's own would return "undefined" as you haven't declared what the 
variables "me" and "last" are. However when the code `blah(callback);` is ran the code works, and should display "Spongebob Squarepants". The reason that when the code is ran it doesn't display an
error is because the variables are listed within the function "blah". It's easier to work backwards here. So the last line tells the computer to look for the function "blah", it does, reads it,
discovers that `var me = 'Spongebob'`, and `var me = 'Squarepants'`. Then it returns to the code at the bottom and reads, `(callback);` so it goes back and reads the function "callback". Within that
function, although it doesn't give you any variables, it tells the computer to display the results in the console.log. So when ran the output should be: "Spongebob Squarepants"




    function callback(me, last){
      console.log(me + last);
    }
    
    function blah(cb){
      var me = 'Spongebob';
      var last = 'Squarepants';
      cb(me, last);
    }
    
    blah(callback);




###Basic Name Structure

Here we are going to get the result "undefinedsmith". This is because the "blah()" function will give us the variable me as being 'john'. Then the "callback()" function will tell the console to
display the results of `(first + last)`. Earlier I said that functions cannot access other functions because of their "scope", well the "callback()" function can read the variables above it because
they have not been listed inside of a function. Any function in this script could read those variables at the top. But because `var first` has been left blank, the resultant code will be:
`undefinedsmith`.

    var first;
    var last = 'smith';
    
    
    function callback(){
      console.log(first + last);
    }
    
    function blah(cb){
      var me = 'john';  
      return me;
    }
    
    blah();
    callback();

###Another example

Another use of JavaScript is to assign variables a value so that it can be retrieved, and used by any function. By assigning the variable like this we can grab more details from it. This variable not
only holds a title, "john", it has a `firstName:` and a `lastName:`. When `console.log(john);` is used, the console will return with 


    var john = {
      firstName: 'john',
      lastName: 'smith'
    };
    
    console.log(john);
    console.log(john.firstName);

When `console.log(john);` is used, the console select the variable "john", and display all of the information the code has on it. So it will return with:

    [object Object] {
      firstName: "john",
      lastName: "smith"
    }

But if the original code is ran together the result will become:

    [object Object] {
      firstName: "john",
      lastName: "smith"
    }
    "john"

This is because the selector `console.log(john.firstName);` selects the object "john", just like the code above it, whereas this one specifies even further, by selecting `firstName` the console should
return with john.

###Another, more complex example (with names)

This code demonstrates the use of people's names as variables, and how to create an array (group) of poeple's and add them to the result.




    var luke = {
      firstName: 'luke',
      lastName: 'skywalker',
      fullName: function(){
        return this.firstName + ' ' + this.lastName;
      }
    };
    
    var darth = {
      firstName: 'darth',
      lastName: 'maul',
      fullName: function(){
        return this.firstName + ' ' + this.lastName;
      }
    };
    
    //console.log(this); // global context is the Window
    
    console.log(luke.fullName());
    
    function talk(person){
      return 'hello ' + person.fullName();
    }
    
    console.log(talk(luke));
    console.log(talk(darth));
    
    function Person(first, last){
      this.firstName = first;
      this.lastName = last;
    }
    Person.prototype = {
      fullName: function(){
        return this.firstName + ' ' + this.lastName;
      }  
    };
    
    var Padmé = new Person('Padmé', 'Amidala‎');
    
    console.log(talk(Padmé‎));
    
    var people = [
      { first: 'obi', last: 'wan' },
      { first: 'the', last: 'emperor' },
      { first: 'james', last: 'brown' }
    ];
    var allPeople = [];
    people.forEach(function(data){
      var person = new Person(data.first, data.last);
      allPeople.push(person);
      console.log(person.fullName());
    });
    
    console.log(allPeople[0].fullName())
    var the = allPeople[1];
    console.log(james.fullName());

The `var people = [` part, a couple of lines up, lists all the names as an array (list). The code below which specifies `allPeople` basically reads the `var people = [` code and sticks them all
together. Then the code says to seperate them into different objects and treat them as a "person" (by using the template that was created earlier in the same code), and then sorts them as
`(data.first, data.last)` and passses that on to the line below which pushes the code into the `Person.prototype` which will allow the console to treat the items in the array in the same way it
handles the others, outside of the array. The line of code following that block will return with a list of everyone's names that are within that array. Then the code goes down and gives you the first
name in the array, "obi wan". Following that it, it will give you the full name of the second variable within that string: "the emperor", and lastly it will tell you the full name of "james": that
being: "james brown".

So that brings the end of my Work Experience, here with Dave Taylor to an end. :( It's such a shame that time has gone so quickly, but I have learnt a lot from this 'experience', in a matter of hours
he was able to teach me the basics of JavaScript in a way that the books that I had been pouring myself over, never could. Thank you so much! I just wish that I could stay and learn even more. 