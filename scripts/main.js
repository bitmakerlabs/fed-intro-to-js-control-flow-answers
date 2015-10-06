$(document).ready(function(){
  /* 
    Create your variables here
    
    We'll need to create variables to represent the following values:
    - Monday Temperature [number]
    - Tuesay Temperature [number]
    - Wedday Temperature [number]
    - Thursday Temperature [number]
    - Friday Temperature [number]

    Ex. var monTemp = 5;
  */
  var monTemp = 5,
      tuesTemp = 19,
      wedTemp = 15,
      thursTemp = 2,
      friTemp = -10;


  /*
    Make an array and call it tempList.
    Your tempList array should hold all the temperatures you've created in
    the previous step (above).
  
    Ex. var myArray = [monTemp, tuesTemp, wedTemp, thursTemp, friTemp]
  */
  var myArray = [monTemp, tuesTemp, wedTemp, thursTemp, friTemp];


  /*
    Complete this for loop. 
    We want to iterate over each item in your tempList Array ...
    The name of your iterator variable should be item
  */
  for(var item = 0; item < myArray.length; item++) {

    var currentItem = $('<li><span>' + myArray[item] + '&deg;C</span></li>');
    currentItem.appendTo('#temp-list');



    /*
      IF/Else - Let's create some conditions!

      Create some if conditions:
      1) IF myArray[item] is GREATER THAN 10 ...
      2) ELSE IF myArray[item] is GREATER THAN -5 ...
      3) ELSE

      * Note, we're only creating the conditions.
        The blocks for each condition should be empty at the moment
    */


    if(myArray[item] > 10) {
      currentItem.addClass('hot');
    }
    else if(myArray[item] > -5) {
      currentItem.addClass('normal');
    } else {
      currentItem.addClass('cold'); 
    }



  }



/*
      Once your conditions have been created, copy the following code
      in their corresponding blocks

      1) IF myArray[item] is GREATER THAN 10 ...
⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄  Copy this code in the if block: ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
              currentItem.addClass('hot');


      2) ELSE IF myArray[item] is GREATER THAN -5 ...
⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄  Copy this code in the else if block: ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
          currentItem.addClass('normal');


      3) ELSE
⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄  Copy this code in the else block: ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
          currentItem.addClass('cold'); 

*/





});