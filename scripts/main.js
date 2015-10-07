$(document).ready(function(){
  /* STEP 1
    Create your variables here
    
    We'll need to create variables to represent the following values:
    - Monday Temperature [number]
    - Tuesay Temperature [number]
    - Wednesday Temperature [number]
    - Thursday Temperature [number]
    - Friday Temperature [number]

    Ex. var monTemp = 5;
  */
  var mondayTemp = 1005;
  var tuesdayTemp = -150;
  var wednesdayTemp = 25;
  var thursdayTemp = 100;
  var fridayTemp = 40;




  /* STEP 2
    Make an array and call it tempList.
    Your tempList array should hold all the temperatures you've created in
    the previous step (above).
  
    Ex. var myArray = [monTemp, tuesTemp, wedTemp, thursTemp, friTemp];
  */

  var tempList = [mondayTemp, tuesdayTemp, wednesdayTemp, thursdayTemp, fridayTemp];

  // tempList[2] -> wednesdayTemp -> 25


  /* STEP 3
    Complete this for loop. 
    We want to iterate over each item in your tempList Array ...
    The name of your iterator variable should be item
  */

  for(var item = 0; item < 5; item++) {

    var currentItem = $('<li><span>' + tempList[item] + '&deg;C</span></li>');
    currentItem.appendTo('#temp-list');

    /* STEP 4
      IF/Else - Let's create some conditions!

      Create some if conditions:
      1) IF tempList[item] is GREATER THAN 10 ...
      2) ELSE IF tempList[item] is GREATER THAN -5 ...
      3) ELSE

      * Note, we're only creating the conditions.
        The blocks for each condition should be empty at the moment
    */

    if (tempList[item] === 40) {
      currentItem.addClass('forty');
    }
    else if(tempList[item] > 50) {
      currentItem.addClass('inferno')
    }
    else if(tempList[item] > 10) {
      currentItem.addClass('hot');
    } 
    else if (tempList[item] > -5) {
      currentItem.addClass('normal');
    } 
    else {
      currentItem.addClass('cold');
    }






    /* STEP 5
      Once your conditions have been created, copy the following code
      in their corresponding blocks

      1) IF tempList[item] is GREATER THAN 10 ...
⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄  Copy this code in the if block: ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
              currentItem.addClass('hot');


      2) ELSE IF tempList[item] is GREATER THAN -5 ...
⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄  Copy this code in the else if block: ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
          currentItem.addClass('normal');


      3) ELSE
⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄  Copy this code in the else block: ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
          currentItem.addClass('cold'); 

    */

  }
});