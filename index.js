/* Variables and Data Types */
/*Console.log each variable and test your code in the terminal using the Node REPL*/

/*i.e.*/

var pet = "sebastian the pug";
console.log(pet);

/**
* #1
* Variables with a String value
*
* Declare variables named `firstName`, `lastName`, `birthPlace`, `favoriteFood`, `bestMovie`, `favLoveSong`, `cuteAnimal`, `favColor`, `favSneaker`, `coffeeShop`.
* Assign values to these variables with your own data.
*
* Each value should be a String. 
**/

var firstName = 'luke ';

	console.log(firstName);

var lastName = 'mcglynn';

	console.log(lastName);

var birthPlace = 'long beach';

	console.log(birthPlace);

var favoriteFood = 'sushi';

	console.log(favoriteFood);

var bestMovie = 'fight club';

	console.log(bestMovie);

var favLoveSong = 'dunno';

	console.log(favLoveSong);

var cuteAnimal = 'my puppy';

	console.log(cuteAnimal);

var favColor = 'green';

	console.log(favColor);

var favSneaker = 'nanos';

	console.log(favSneaker);

var coffeeShop = 'betterbuzz';

	console.log(coffeeShop);


/**
* #2
* Variables with a Number value
*
* Declare variables named `favoriteNumber`, `currentYear`, `thatOnePrinceSong`, 'tokyoOlympics`, `mariahCareyAge`, `currentTemp`, `studentsInClass`, `numOfJapanPrefectures`, `currentIphoneModel` and `shoeSize`.     
*
* Each value should be a Number
**/

var favoriteNumber = 8;

	console.log(favoriteNumber);

var currentYear = 2017; 

	console.log(currentYear);

var thatOnePrinceSong = 0;

	console.log(thatOnePrinceSong);

var tokyoOlympics = 2014;

	console.log(tokyoOlympics);

var mariahCareyAge = 50;

	console.log(mariahCareyAge);

var currentTemp = 80;

	console.log(currentTemp);

var studentsInClass = 10;

	console.log(studentsInClass);

var numOfJapanPrefectures = 0;

	console.log(numOfJapanPrefectures);

var currentIphoneModel = 7;

	console.log(currentIphoneModel);

var shoeSize = 10.5;

	console.log(shoeSize);



/**
* #3
* Variables with a Boolean value
*
* Declare variables named `likesMcDonalds`, `watchedMrRobot`, `ranMarathon`, `wrestledABear`, `lovesDonuts`, `readHarryPotter`, `sleptInClass`, `drinksCoffee`, `shopsAtWholeFoods` and `ownsRedShoes`.     
*
* Each value should be a Boolean
**/

var likesMcDonalds = false;

	console.log(likesMcDonalds);

var watchedMrRobot = false;

	console.log(watchedMrRobot);

var ranMarathon = false;

	console.log(ranMarathon);

var wrestledABear = false;

	console.log(wrestledABear);

var lovesDonuts = true;

	console.log(lovesDonuts);

var readHarryPotter = false;

	console.log(readHarryPotter);

var sleptInClass = true;

	console.log(sleptInClass);

var drinksCoffee = true;

	console.log(drinksCoffee);

var shopsAtWholeFoods = false;

	console.log(shopsAtWholeFoods);

var ownsRedShoes = true;

	console.log(ownsRedShoes);

/**
* #4
* Variables with a Null value
*
* Declare variables named `completedPrepClass`, `traveledToMars` and `scoredTDinNFL`.
*
* Each value should be Null 
**/

var completedPrepClass = null;

	console.log(completedPrepClass);

var traveledToMars = null;

	console.log(traveledToMars);

var scoredTDinNFL = null;

	console.log(scoredTDinNFL);


/*
#5. 
* What is the difference between null and undefined? Type your answer in two or three commented-out sentences.
*/

/*undefined means a variable has been declared but has not yet been assigned a value. 
On the other hand, null is an assignment value. It can be assigned to a variable as a representation of no value.

/**
* #6
* Variables with an Array value
* 
* Declare a variable named 'plateLunch` and assign it an array containing 5 of your favorite lunch items.
* Declare a variavle named `fruitBasket` and assign it an array containing 5 fruits of your choosing.
* Declare a variable named `westCoast` and assign it an array containing states found on the west coast of the US.
* Declare a variable named `lotteryResult and assign it an array containing 5 random numbers.
* Declare a variable named `duets` and assign it an array containing 3 nested arrays, each containing the names of 2 singers or bands.
* Declare a variable named `mixPlate` and assign it an array containing different data types of your choosing.
**/

var plateLunch = ['pizza', 'sushi', 'pasta', 'guac', 'tacos'];

	console.log(plateLunch);

var fruitBasket = ['orange', 'apple', 'lemon', 'banana', 'guava'];

	console.log(fruitBasket);

var westCoast = ['california', 'oregon', 'washington'];

	console.log(westCoast);

var lotteryResult = [ 1, 2, 3, 4, 5];

	console.log(lotteryResult);

var duets = [['beattles' ,'the whos'],['slipknot' ,'thrice'],['underoath','lil Wayne']];

	console.log(duets);

var mixPlate = [1, 'hi',true];

	console.log(mixPlate);

/*7
* Accessing Values in Arrays

var partyList = ["carrot cake", "rocky road ice cream", "mochiko chicken", "orange tang", "lemon bars"];

What is the length of this array? Please print the length (a number) to the console.
What is the index position of carrot cake? Please print this item to the console.
What is the index position of lemon bars? Please print this item to the console.
*/

var partyList = ["carrot cake", "rocky road ice cream", "mochiko chicken", "orange tang", "lemon bars"];


console.log(partyList.length);

console.log(partyList[0]);

console.log(partyList[4]);



/*
* #8 
* Concatenation 
* Concatenate the variables `firstName` and `lastName` and store this to a new variable called `fullName`.

* Declare a new variable, `whereFrom`, and assign it the value of a string using the variables `fullName` and `birthPlace`:
 xx xx is from xx.
 e.g.
 Usain Bolt is from Jamaica.
 
*Declare a new variable, `mariahStory`. Assign it the value of concatenating the variables `mariahCareyAge`, `favSneaker`, `favLoveSong` and `coffeeShop` to create the following sentence:
At the age of xx, Mariah Carey, wearing her fancy xx, sang xx at the xx.
*/


var fullName = firstName  +  lastName;

	console.log(fullName);

var whereFrom = fullName + ' is from ' + birthPlace;

	console.log(whereFrom);

var mariahStory = 'At the age of ' + mariahCareyAge + ', Mariah Carey, wearing her fancy ' + favSneaker + ', sang ' + favLoveSong + ' at the ' + coffeeShop;

	console.log(mariahStory);


/**
* #9 Arithmetic
* Variables with the outcome of an arithmetic operation.
* Declare two variables, `num1` and `num2` and assign each of these variables a number of your choosing.
* Next perform the following arithmetic operations:

* Add the two variables and store it to new variable named `sum`.
* Subtract the two variables and store it to a new variable named `difference`.
* Mulitply the two variables and store it to a new variable named `product`.
* Divide the two variables and store it to a new variable named `quotient`.
* What is the remainder when you divide num1 by num2? Print your answer to the console.
*/

var num1 = 1;

var num2 = 2;

var sum = (num1 += num2);

var difference = (num1 -= num2);

var product = (num1 *= num2);

var quotient = (num1 /= num2);



console.log(num1%num2);



/**
* #10
* Comparisons & Logic
* Variables with the outcome of a comparison operation:
*
* Declare a variable named `isStrictlyEqual` and compare two strings "Tacocat" and "tacocat" using the strict equality.
* Declare another variable named `isLooselyEqual` and compare the two strings "Tacocat" and "tacocat" using equality.
* Print both variables to the console. If the answers are different, why? If not, why not? Write you answer two or three commented-out sentences.

* Declare a variable named `sameNum` and compare a string "5" and a number 5 using strict equality.
* Declare another variable named `sameNumba` and compare a string "5" and a number 5 using equality.
* Print both variables to the console. If the answers are different, why? If not, why not? Write you answer two or three commented-out sentences.




* Use the logical && or || and compare the following:
* 3>2 3<1 (use or)
* 3>2 6>3 (use and)
* 7>2 8<5 (use and)
* Declare variables and print the results to the console. What are the differences between the three and why?
*/

var isStrictlyEqual = "Tacocat" === "tacocat"

	console.log(isStrictlyEqual);

var isLooselyEqual = "Tacocat" == "tacocat"

	console.log(isLooselyEqual);

	/* The answers are both false because the strings are not equal. 
	One string has an upper case letter at the beginnings and the other doesnt. 
	Therefore they are not considered equal.
	*/


var or = 3>2 || 3<1;

	console.log(or);

	/*  True  */

var andOne = 3>2 && 6>3;

	console.log(andOne);

	/*  True  */

var andTwo = 7>2 && 8<5;

	console.log(andTwo);

	/*  False  */

/* The first two are true statements. 
The last one is false because 8 is not '<' 5, therefore is returns false. */




/**
* #11
* Assignments
* Variables with the outcome of an assignment operation:
*
* Declare a variable named `myBox` and assign it with a number of your choosing.
* This variable will be used to store multiple types of values as we assign them to show how variables in JavaScript are not bound to a single data type
* and can change values.

* Write 5 different assignment statements and `console.log()` the value of the variable after each
* assignment statement to show the current value. REMEMBER: an assignment is DIFFERENT from a declaration.
*/


var myBox = 1;

	console.log(myBox);

myBox += "hello";

	console.log(myBox);

myBox += false;

	console.log(myBox);

myBox += 33;

	console.log(myBox);

myBox += "world";

	console.log(myBox);

myBox += 1234;

	console.log(myBox);

	
	


/**
* Final Boss 
* Additional exercises designed to further challenge you and give you a jump start on the next topic that'll be covered.
* Function - A block of code designed to perform a particular task. It allows you to reuse code.
*
* Declare a function named `bakePie` which has a single parameter 'ingredient'.
* When the function is invoked, it should return a string, "Today's special ingredient pie." Where ingredient will be the value that you pass into the function.
* For example, if the value is `blueberry`, it should return "Today's special blueberry pie."
* Declare a variable 'pieResult' and assign it to the function call.
* Console.log the variable to see the result.



* Declare a Function named `jump` which has a single parameter, `height`.
* This function should return a string, "You jumped height feet high!" Where height will be the value that you pass into the function.
* For example, if the value is 9, it should return "You jumped 9 feet high!"
*
* Declare a variable 'jumpResult' and assign it to the function call.
* Console.log the variable to see the result.


* Declare a Function named `cook` which a takes three parameters, `ingredient1`, `ingredient2`, `recipeName`.
* This function should return a String along the lines of, "Tomatoes and Cheese make a Pizza!"
* if invoked in this way -> cook("Tomatoes", "Cheese", "Pizza");
**/

function bakePie(ingredient){

 return "Today's special " + ingredient + " pie.";


};

var pieResult = bakePie("blueberry");

console.log(pieResult);

function jump(height){

	return "You jumped " + height + " feet high"
};

var jumpResult = jump(21);

console.log(jumpResult);

function cook(ingredient1, ingredient2, recipeName){

	return ingredient1 + " and " + ingredient2 + " make a " + recipeName
};

var cookResult = cook("Tomatoes", "Cheese", "Pizza");


	console.log(cookResult);


















