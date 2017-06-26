# eloquentJavaScript
- Exercises and notes from the book http://eloquentjavascript.net/
- Started as preparation for Lambda University, July 3, 2017
	- Chapters 3 and 4 assigned as pre-Course homework

## [Chapter 3](http://eloquentjavascript.net/03_functions.html) - Functions
> *"People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones."*  
-Donald Knuth

01. Defining a Function
	> "Some functions produce a value, such as power and square, and some don’t, such as makeNoise, which produces only a side effect. A return statement determines the value the function returns. When control comes across such a statement, it immediately jumps out of the current function and gives the returned value to the code that called the function. The return keyword without an expression after it will cause the function to return undefined."

	- [03.01a.js](ch03-functions/03.01a.js) - Squaring a number
	- [03.01b.js](ch03-functions/03.01b.js) - Make some noise!
	- [03.01c.js](ch03-functions/03.01c.js) - Raise a base by an exponent

02. Parameters and Scopes
	> "The parameters to a function behave like regular variables, but their initial values are given by the caller of the function, not the code in the function itself ... An important property of functions is that the variables created inside of them, including their parameters, are local to the function ... "

	- [03.02.js](ch03-functions/03.02.js)
03. Nested Scope
	- [03.03.js](ch03-functions/03.03.js)
04. Functions as Values
	- [03.04.js](ch03-functions/03.04.js)
05. Declaration Notation
	- [03.05a.js](ch03-functions/03.05a.js)
	- [03.05b.js](ch03-functions/03.05b.js)
06. The Call Stack
	- [03.06a.js](ch03-functions/03.06a.js)
	- [03.06b.js](ch03-functions/03.06b.js)
07. Optional Arguments
	- [03.07.js](ch03-functions/03.07.js)
08. Closure
	- [03.08a.js](ch03-functions/03.08a.js)
	- [03.08b.js](ch03-functions/03.08b.js)
09. Recursion
	- [03.09a.js](ch03-functions/03.09a.js)
	- [03.09b.js](ch03-functions/03.09b.js)
10. Growing Functions
	> "How difficult it is to find a good name for a function is a good indication of how clear a concept it is that you’re trying to wrap."  

	- [03.10a.js](ch03-functions/03.10a.js)
	- [03.10b.js](ch03-functions/03.10b.js)
	- [03.10c.js](ch03-functions/03.10c.js)
11. Functions and Side Effects
	> Functions that create values are easier to combine in new ways than functions that directly perform side effects.

12. Summary
	> The function keyword, when used as an expression, can create a function value. When used as a statement, it can be used to declare a variable and give it a function as its value.

13. Exercises
	- [Minimum](ch03-functions/03.13minimum.js)
	- [Recursion](ch03-functions/03.13minimum.js)
	- [Bean Couting](ch03-functions/03.13recursion.js)

## [Chapter 4](http://eloquentjavascript.net/04_data.html) - Data Structures: Objects and Arrays
> *"On two occasions I have been asked, ‘Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?’ [...] I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question."*  
-Charles Babbage, Passages from the Life of a Philosopher (1864)  

01. The Weresquirrel
02. Data Sets
	- [04.02.js](ch04-data-structures_objects-arrays/04.02.js)
03. Properties
	> When using a dot, the part after the dot must be a valid variable name, and it directly names the property. When using square brackets, the expression between the brackets is evaluated to get the property name. Whereas value.x fetches the property of value named “x”, value[x] tries to evaluate the expression x and uses the result as the property name.

	- [04.03.js](ch04-data-structures_objects-arrays/04.03.js)
04. Methods
05. Objects
06. Mutability
07. The Lycanthrope's Log
08. Computing Correlation
09. Objects as Maps
10. The Final Analysis
11. Further Arrayology
12. Strings and their Properties
13. The Arguments Object
14. The Math Object
15. The Global Object
16. Summary
17. Exercises

## [Chapter 5](http://eloquentjavascript.net/05_higher_order.html) - Higher Order Functions
> *"Tzu-li and Tzu-ssu were boasting about the size of their latest programs. ‘Two-hundred thousand lines,’ said Tzu-li, ‘not counting comments!’ Tzu-ssu responded, ‘Pssh, mine is almost a million lines already.’ Master Yuan-Ma said, ‘My best program has five hundred lines.’ Hearing this, Tzu-li and Tzu-ssu were enlightened."*  
-Master Yuan-Ma, The Book of Programming

> *"There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies."*  
-C.A.R. Hoare, 1980 ACM Turing Award Lecture

01.

## [Chapter 20](http://eloquentjavascript.net/20_node.html) - Node.js
01. Background
02. Asynchronicity
	- http://eloquentjavascript.net/20_node.html#h_HH3wvnWMnd

***
# Additional reading
## Memory management
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management
- https://www.ibm.com/developerworks/web/library/wa-memleak/
