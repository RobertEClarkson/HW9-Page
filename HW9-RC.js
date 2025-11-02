// HOMEWORK 9 //

//#region Set 1: Advanced Syntax, Types, and Quirks

    // Exercise #1
        console.log("Exercise #1");
        var a = 3;
        var b = 5;
        var division = 10 / 2;
        var difference = 8 - 4;
        var finalValue = a + b * division - difference;
        console.log("3 + 5 * (10 / 2) - (8 - 4) = ", finalValue); 

    //Exercise #2
        console.log("Exercise #2");
        var projectIdentifier = "COMP484";
        console.log("Initial string:", projectIdentifier);

        ProjectIdentifier = "JS_Advanced";
        //This assignment doesn't work because the original variable's camelCase. 
        //"ProjectIdentifier" does not exist so it can't be assigned to.        

        projectIdentifier = "JS_Advanced";
        console.log("Newly assigned string:", projectIdentifier);

    //Exercise #3
        console.log("Exercise #3 (quotes exercise)");
        var courseDescription = `The course is "interactive" and involves 'scripting' logic.`;
        console.log(courseDescription);

    //Exercise #4
        console.log("Exercise #4 (escape quotes exercise)");
        var errorMessage = "An internal server error occurred: \"Access Denied\"";
        console.log(errorMessage);

    //Exercise #5
        console.log("Exercise #5");
        var valueA = 10;
        var valueB = "4";
        var resultSubtraction = valueA - valueB;
        var resultMultiplication = valueA * valueB;
        console.log("valueA =", valueA, "valueB =", valueB);
        console.log("Type of valueA:", typeof valueA);
        console.log("Type of valueB:", typeof valueB);
        console.log("valueA - valueB",resultSubtraction);
        console.log("valueA * valueB",resultMultiplication);
//#endregion

//#region Set 2: Operators and Type Theory

    //Exercise #6
        console.log("Exercise #6");
        var unassignedVar;
        var explicitNull = null;
        console.log("Type of unassignedVar:", typeof unassignedVar);
        console.log("Type of explicitNull:", typeof explicitNull);
        /*
        Typeof unassignedVar returns undefined because we did not assign a value to it.
        'undefined' is a property of the global object and is a primitive type in JavaScript. 
        Since JavaScript is a weakly-typed language, our variables are assigned a type at declaration.

        Typeof null returns 'object' because of a legacy bug in JavaScript. 
        null is the absence of an object yet it returns as an object, similar to how NaN returns as a number.
        */

    //Exercise #7
        console.log("Exercise #7");
        var isBlocking = true;
        console.log("Initial type:", typeof isBlocking);
        isBlocking = "true";
        console.log("New type:", typeof isBlocking);

    //Exercise #8
        console.log("Exercise #8");
        //var 3 = 3;    Variables cannot contain numbers in their names

        //var cool Variable = 777;  //Variables cannot contain spaces in their names. cool is now a var but Variable is not.

        //var @W$0ME = "Awesome";   Variables cannot contain special symbols in their names

    //Exercise #9
        console.log("Exercise #9");
        var counterValue = 50;
        counterValue /= 5;
        counterValue -= 3;
        console.log("50/5 - 3 =", counterValue);

    //Exercise #10
        console.log("Exercise #10");
        var x = 10;
        console.log("Initial x value:", x);
        var y_post = x++;
        //x++ increments x after this line occurs. y_post will be 10 until another log occurs
        console.log("x =", x, "y_post =", y_post);

        x = 10;
        console.log("Reinitialized x value:", x);
        var z_pre = ++x;
        //++x increments x before this line occurs. z_pre will be the 11 since the operation happened before the log
        console.log("x =", x, "z_pre = ", z_pre);
//#endregion

//#region Set 3: Advanced Logic and Comparisons

    //Exercise #11
        console.log("Exercise #11");
        var testNumber = 0;
        var testBoolean = false;

        console.log("Are the number 0 and the boolean false equal?");
        if(testNumber == testBoolean){
            console.log("They are loosely equal!");
            //because of type coercion, 0 is falsy and is loosely equivalent to false. 1 is truthy and loosely equivalent to true
        }
        else{
            console.log("Not equal!");
        }

    //Exercise #12
        console.log("Exercise #12");
        var versionA = 10.0;
        var versionB = "10.0";

        console.log("Type of versionA:", typeof versionA);
        console.log("Type of versionB:", typeof versionB);
        if( versionA !== versionB){
            console.log("Strictly NOT equal!");
        }
        else{
            console.log("Strictly equal!");
        }

    //Exercise #13
        console.log("Exercise #13");
        var isLoggedInA = true;
        var isLoggedInB = false;
        var isSubscriberA = true;
        var isSubscriberB = false;
        var isTrialExpiredA = false;
        var isTrialExpiredB = false;

        //Person A is logged in, a subscriber, and trial has not expired.
        //Person B is not logged in, not subscribed, and has an expired trial.

        //store function into const so I don't have to write it for each different person.
        const access = function(a,b,c){
            if((a === true && b === true) || (a === true && c === false)){
                return "Access Granted!";
            }
            else{
                return "Access Denied!";
            }
        }

        //call function for each person and store result into another const.
        const loggedInA = access(isLoggedInA, isSubscriberA, isTrialExpiredA);
        const loggedInB = access(isLoggedInB, isSubscriberB, isTrialExpiredB);

        console.log("Person A tries logging in...");
        console.log(loggedInA);
        console.log("Person B tries logging in...");
        console.log(loggedInB);

    //Exercise #14
        console.log("Exercise #14");
        //same approach as #13, two instances to illustrate both outcomes
        var conditionA = true;
        var conditionB = false;
        var conditionC = true;
        var conditionD = true;

        const xOR = function(a,b){
            if((a == true || b == true) && ((a && b) != true)){
                return "XOR Success!";
            }
            else{
                return "XOR Fail!";
            }
        }

        const firstInstance = xOR(conditionA, conditionB);
        const secondInstance = xOR(conditionC, conditionD);

        console.log("True XOR False:", firstInstance);
        console.log("True XOR True:", secondInstance);

    //Exercise #15
        console.log("Exercise #15");
        var scriptLoadType = "deferred";
        var loadStatus;

        console.log("If statement:");
        if(scriptLoadType == "deferred"){
            loadStatus = "Non-Blocking";
        }
        else{
            loadStatus = "Potentially Blocking";
        }
        console.log(loadStatus);

        console.log("Ternary statement:");
        scriptLoadType == "deferred" ? loadStatus = "Non-Blocking" : loadStatus = "Potentially Blocking";
//#endregion

//#region Set 4: Integration and Application
    //Exercise #16
        console.log("Exercise #16 (exercise in commenting and indentation)");

        /*
        This function's purpose is to calculate the time taken to parse HTML and execute JavaScript
        */

        function calculateRenderTime (){
            //body of the function
        }

    //Exercise #17
        console.log("Exercise #17");
        const currentDate = new Date();
        const thisMonth = currentDate.getMonth() + 1;
        const thisDay = currentDate.getDate();
        const thisYear = currentDate.getFullYear();

        console.log("Today's date is", thisMonth, "/", thisDay, "/", thisYear);

    //Exercise #18
        console.log("Exercise #18");
        var val1 = 20;
        var val2 = "5";

        console.log("Type of val1:", typeof val1);
        console.log("Type of val2:", typeof val2);

        var sumResult = val1 + val2;
        var diffResult = val1 - val2;
        console.log("Sum:", sumResult, "Difference:", diffResult);
        /*
        Just like in example #11, type coercion is the reason why the result is unexpectedly 205.
        The + operator will do string concatenation if one of the operands is a string.
        Since 5 is a string, 20 will be converted into a string as well in order for concatenation to occur.
        */

    //Exercise #19
        console.log("Exercise #19");
        //same approach as #13 and #14
        var dataInput = 484;
        var stringInput = '"I am a string!"';

        const typeCheck = function(a){
            if(typeof a === "number"){
                return "Input is numeric!";
            }
            else{
                a = true;
                return "Not numeric. Reassigning variable to: " + typeof a;
            }
        }

        const isNumeric = typeCheck(dataInput);
        const notNumeric = typeCheck(stringInput);

        console.log("Is", dataInput, "numeric?");
        console.log(isNumeric);
        console.log("Is", stringInput, "numeric?");
        console.log(notNumeric);

    //Exercise #20
        console.log("Exercise #20");
        /*
        If this code snippet is added to the HTML head section without the 'defer' or 'async' attributes, 
        it can lead to the error "Cannot set property 'innerHTML' of null". This is because the browser 
        gets the HTML document and reads it from the top. Inside of the html element we have a
        head, some meta content, the title and then we have our javascript. When it gets to the javascript, 
        it has yet to create the body element and therefore has no idea what to do with our code snippet.
        */
        document.body.innerHTML = "<h1>Interactive Layer Loaded</h1>"
        
//#endregion